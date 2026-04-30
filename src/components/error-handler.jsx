import "./error-handler.css";

export default function ErrorHandler() {
  return (
    <div className="error">
      <div className="error-content">
        <p>error. gulp...</p>
        <img src="/error.gif" alt="error." style={{ width: "150px" }} />
      </div>
    </div>
  );
}