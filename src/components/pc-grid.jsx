import PCCard from "./pc-card.jsx";

function PCGrid({ pcs }) {
  const col1 = pcs.slice(0, 5);
  const col2 = pcs.slice(5, 10);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {col1.map((pc) => (
          <PCCard
            key={pc.name}
            name={pc.name}
            time={`${pc.time[0]}h ${pc.time[1]}m`}
            status={pc.status}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
