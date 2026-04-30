import "./Hours.css";

const HOURS = [
  { day: "Monday", time: "2:30 PM – 10:30 PM" },
  { day: "Tuesday", time: "2:30 PM – 10:30 PM" },
  { day: "Wednesday", time: "2:30 PM – 10:30 PM" },
  { day: "Thursday", time: "2:30 PM – 10:30 PM" },
  { day: "Friday", time: "12:30 PM – 10:30 PM" },
  { day: "Saturday", time: "12:30 PM – 10:30 PM" },
  { day: "Sunday", time: "2:30 PM – 10:30 PM" },
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