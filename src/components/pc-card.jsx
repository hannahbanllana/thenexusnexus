import './pc-card.css'

const getStatusClass = (status) => {
  switch (status) {
    case "ReadyForUser":
      return "available";
    case "UserLoggedIn":
      return "occupied";
    case "AdminMode":
      return "occupied"; // or "kickable" if you prefer
    case "Off":
      return "offline";
    default:
      return "";
  }
};

function PCCard({ name, time, status }) {
    return(
        <div className="pc-card">
            <div className="pc-info">
                <h2>{name}</h2>
                <p>{time}</p>
            </div>
            <div className={`pc-status ${getStatusClass(status)}`}></div>
        </div>
    );
}

export default PCCard