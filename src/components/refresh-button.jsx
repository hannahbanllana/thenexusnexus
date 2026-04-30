import "./refresh-button.css";

export default function RefreshButton({ onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Refreshing..." : "Refresh"}
    </button>
  );
}