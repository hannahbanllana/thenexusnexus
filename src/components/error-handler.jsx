import "./error-handler.css";
import { Link } from "react-router-dom";

export default function ErrorHandler() {
  return (
    <div className="error">
      <div className="error-content">
        <h2>error. gulp...</h2>
        <img src="/error.gif" alt="error." style={{ width: "250px" }} />
        <Link to="/hours" className="hours-link">view hours</Link>
      </div>
    </div>
  );
}