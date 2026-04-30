import "./Hours.css";

const HOURS = [
  { day: "sunday", time: "2:30 PM – 10:30 PM" },
  { day: "monday", time: "2:30 PM – 10:30 PM" },
  { day: "tuesday", time: "2:30 PM – 10:30 PM" },
  { day: "wednesday", time: "2:30 PM – 10:30 PM" },
  { day: "thursday", time: "2:30 PM – 10:30 PM" },
  { day: "friday", time: "12:30 PM – 10:30 PM" },
  { day: "saturday", time: "12:30 PM – 10:30 PM" },
];

export default function Hours() {
  return (
    <div className="hours">
      <div className="hours-content">
        <h2>hours</h2>
        <div className="hours-table">
          {HOURS.map(({ day, time }) => (
            <div className="hours-row" key={day}>
              <span className="hours-day">{day}</span>
              <span className="hours-time">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}