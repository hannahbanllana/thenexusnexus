import "./error-handler.css";

export default function ErrorHandler() {
  return (
    <div className="error">
      <div className="error-content">
        <h2>error. gulp...</h2>
        <img src="/error.gif" alt="error." style={{ width: "250px" }} />
      </div>
    </div>
  );
}