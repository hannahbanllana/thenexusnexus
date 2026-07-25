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

const SHOURS = [
  { day: "sunday", time: "closed" },
  { day: "monday", time: "11:00 AM - 2:00 PM" },
  { day: "tuesday", time: "closed" },
  { day: "wednesday", time: "2:00 PM - 5:00 PM" },
  { day: "thursday", time: "11:00 AM - 2:00 PM" },
  { day: "friday", time: "2:00 PM - 5:00 PM" },
  { day: "saturday", time: "closed" },
];

export default function Hours() {
  return (
    <div className="hours">
      <div className="hours-content">
        <h2> summer hours</h2>
        <div className="hours-table">
          {SHOURS.map(({ day, time }) => (
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