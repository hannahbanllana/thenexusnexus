import "./refresh-button.css";

export default function RefreshButton({ onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "refreshing..." : "refresh"}
    </button>
  );
}