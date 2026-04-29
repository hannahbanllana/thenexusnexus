import { useState, useEffect } from "react";
import "./App.css";
import PCGrid from "./components/pc-grid.jsx";

const GGLEAP_ENDPOINT = import.meta.env.VITE_GGLEAP_ENDPOINT;
const PCS_ENDPOINT = `${GGLEAP_ENDPOINT}/machines/uptime`;

function App() {
  const [pcs, setPcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPCSData() {
      try {
        const response = await fetch(PCS_ENDPOINT, {
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

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

    getPCSData();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <h1>the nexus nexus</h1>
        </div>
      </header>

      <main>
        <p>these are all the computers</p>

        {loading && (
          <div className="loader">
            <div className="loader-content">
              <p>Loading...</p>
              <img
                src="/loading.gif"
                alt="Loading..."
                style={{ width: "150px" }}
              />
            </div>
          </div>
        )}

        {error && (
          <div className="error">
            <div className="error-content">
              <p>error. gulp...</p>
              <img src="/error.gif" alt="error." style={{ width: "150px" }} />
            </div>
          </div>
        )}

        {!loading && !error && <PCGrid pcs={pcs} />}
      </main>
    </>
  );
}

export default App;
