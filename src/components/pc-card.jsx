import "./pc-card.css";

const getStatusClass = (status, time) => {
  if (time && time[0] >= 2 && status === "UserLoggedIn") {
    return "Kickable";
  }
  
  switch (status) {
    case "ReadyForUser":
      return "Available";
    case "UserLoggedIn":
      return "Occupied";
    case "AdminMode":
      return "Occupied";
    case "Off":
      return "Offline";
    default:
      return "";
  }
};

function PCCard({ name, time, status, mirrored }) {
  return (
    <div className={`pc-card ${mirrored ? "mirrored" : ""}`}>
      <div className="pc-info">
        <h2>{name}</h2>
        <div className="more-info">
          <p>{getStatusClass(status, time)}</p>
          <p>{time}</p>
        </div>
      </div>
      <div className={`pc-status ${getStatusClass(status, time)}`}></div>
    </div>
  );
}

export default PCCard;