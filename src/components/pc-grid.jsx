 import PCCard from "./pc-card.jsx";
import "./pc-grid.css";

function PCGrid({ pcs }) {
  const col1 = pcs.slice(0, 5);
  const col2 = pcs.slice(5, 10);

  return (
    <div className="pc-grid">
      <div className="pc-column">
        {col1.map((pc) => (
          <PCCard
            key={pc.name}
            name={pc.name}
            time={`${pc.time[0]}h ${pc.time[1]}m`}
            status={pc.status}
          />
        ))}
      </div>

      <div className="pc-column">
        {col2.map((pc) => (
          <PCCard
            key={pc.name}
            name={pc.name}
            time={`${pc.time[0]}h ${pc.time[1]}m`}
            status={pc.status}
            mirrored={true}
          />
        ))}
      </div>
    </div>
  );
}

export default PCGrid;
