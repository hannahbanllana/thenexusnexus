import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import PCGrid from "./components/pc-grid.jsx";
import Loader from "./components/loader.jsx";
import ErrorHandler from "./components/error-handler.jsx";
import RefreshButton from "./components/refresh-button.jsx";
import Reservations from "./pages/Reservations.jsx";

const GGLEAP_ENDPOINT = import.meta.env.VITE_GGLEAP_ENDPOINT;
const PCS_ENDPOINT = `${GGLEAP_ENDPOINT}/machines/uptime`;

function App() {
  const [pcs, setPcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <h1>the nexus nexus</h1>
          <nav className="nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              PCs
            </NavLink>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
            >
              Reservations
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
                {!loading && !error && (
                  <div style={{ position: "relative", paddingTop: "12px" }}>
                    <RefreshButton onClick={getPCSData} loading={loading} />
                    <PCGrid pcs={pcs} />
                  </div>
                )}
              </>
            }
          />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
