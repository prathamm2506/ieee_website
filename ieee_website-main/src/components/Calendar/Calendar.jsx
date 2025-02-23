import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const events = [
    { day: "01", title: "New Year", time: "All day", link: "/vesit_tank" },
    { day: "01", title: "Flutter Workshop Day 1", time: "2:30 PM - 3:30 PM", link: "/vesit_tank" },
    { day: "02", title: "Flutter Workshop Day 2", time: "2:30 PM - 3:30 PM", link: "/vesit_tank" },
    { day: "03", title: "SYMPOSIUM: Melange 23", time: "2:00 PM - 5:00 PM", link: "/vesit_tank" },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startingDay = 6; // Assuming 30th is Saturday

  return (
    <div className="calendar">
      <h2 className="text-center my-8 uppercase">Our Events</h2>
      <div className="calendar-grid">
        {["30", "31", "01", "02", "03"].map((day, index) => {
          const event = events.find((e) => e.day === day);
          const dayOfWeek = daysOfWeek[(startingDay + index) % 7];
          return (
            <div 
              key={index} 
              className={`day ${day === "03" ? "highlight" : ""}`} 
              onClick={() => event && (window.location.href = event.link)}
              style={{ cursor: event ? "pointer" : "default" }}
            >
              <div className="day-content">
                <span className="day-of-week">{dayOfWeek}</span>
                <hr />
                <span className="date">{day}</span>
              </div>
              {event && (
                <div className="event">
                  <p className="event-title">{event.title}</p>
                  <p className="event-time">{event.time}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
