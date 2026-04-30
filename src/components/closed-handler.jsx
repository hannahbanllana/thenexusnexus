import "./closed-handler.css";

export default function ClosedHandler() {
  return (
    <div className="closed">
      <div className="closed-content">
        <h2>nexus is currently closed</h2>
        <img src="/sleep.gif" alt="closed." style={{ width: "250px" }} />
      </div>
    </div>
  );
}