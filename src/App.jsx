import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import PCGrid from "./components/pc-grid.jsx";
import Loader from "./components/loader.jsx";
import ErrorHandler from "./components/error-handler.jsx";
import RefreshButton from "./components/refresh-button.jsx";
import Reservations from "./pages/Reservations.jsx";
import ClosedHandler from "./components/closed-handler.jsx";
import Hours from "./pages/Hours.jsx";

const GGLEAP_ENDPOINT = import.meta.env.VITE_GGLEAP_ENDPOINT;
const PCS_ENDPOINT = `${GGLEAP_ENDPOINT}/machines/uptime`;

function App() {
  const [pcs, setPcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  function isNexusOpen() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      weekday: "short",
    }).formatToParts(now);

    const hour = parseInt(parts.find((p) => p.type === "hour").value);
    const minute = parseInt(parts.find((p) => p.type === "minute").value);
    const day = parts.find((p) => p.type === "weekday").value;

    const time = hour * 60 + minute;
    const close = 22 * 60 + 30;

    if (["Mon", "Tue", "Wed", "Thu", "Sun"].includes(day)) {
      return time >= 14 * 60 + 30 && time < close;
    }

    if (["Fri", "Sat"].includes(day)) {
      return time >= 12 * 60 + 30 && time < close;
    }

    return false;
  }

  async function getPCSData() {
    try {
      const response = await fetch(PCS_ENDPOINT, { mode: "cors" });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const data = await response.json();
      const formatted = Object.entries(data)
        .map(([name, value]) => ({
          name,
          status: value.state,
          time: [value.uptime.hours, value.uptime.minutes],
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setPcs(formatted);
    } catch (err) {
      console.error("Fetch failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPCSData();
  }, []);

  const nexusOpen = isNexusOpen();

  return (
    <>
      <Analytics />
      <header className="header">
        <div className="header-inner">
          <NavLink
            to="/"
            end
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>the nexus nexus</h1>
          </NavLink>
          <nav className="nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              pcs
            </NavLink>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              reservations
            </NavLink>
            <NavLink
              to="/hours"
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              hours
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading && <Loader />}
                {error && <ErrorHandler />}
                {!loading && !error && !nexusOpen && <ClosedHandler />}
                {!loading && !error && nexusOpen && <PCGrid pcs={pcs} />}
              </>
            }
          />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/hours" element={<Hours />} />
        </Routes>
      </main>

      {location.pathname === "/" && !loading && !error && (
        <RefreshButton onClick={getPCSData} loading={loading} />
      )}
    </>
  );
}

export default App;
