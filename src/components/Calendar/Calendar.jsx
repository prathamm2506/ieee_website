import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const events = [
    { day: 13, month: 8, year: 2024, title: "Crypto Chrome", time: "3:00 PM - 4:30 PM", link: "/crypto_chrome" },
    { day: 21, month: 8, year: 2024, title: "UI/UX Workshop Day 1", time: "3:00 PM - 4:30 PM", link: "/uiux" },
    { day: 22, month: 8, year: 2024, title: "UI/UX Workshop Day 2", time: "3:00 PM - 4:30 PM", link: "/uiux" },
    { day: 12, month: 9, year: 2024, title: "Campus Quest Day 1", time: "2:30 PM", link: "/hpomen" },
    { day: 13, month: 9, year: 2024, title: "Campus Quest Day 2", time: "2:30 PM", link: "/hpomen" },
    { day: 5, month: 10, year: 2024, title: "Technical Paper Presentation", time: "4:00 PM", link: "/paperquest" },
    { day: 14, month: 10, year: 2024, title: "UI/UX Competition", time: "2:30 PM", link: "/uiux_competition" },
    { day: 16, month: 12, year: 2024, title: "Flutter Workshop Day 1", time: "2:30 PM - 3:30 PM", link: "/flutter" },
    { day: 17, month: 12, year: 2024, title: "Flutter Workshop Day 2", time: "2:30 PM - 3:30 PM", link: "/flutter" },
    { day: 18, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter" },
    { day: 19, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter" },
    { day: 20, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter" },
    { day: 8, month: 1, year: 2025, title: "APIcalypse Day 1", time: "2:30 PM - 4:30 PM", link: "/apicalypse" },
    { day: 9, month: 1, year: 2025, title: "APIcalypse Day 2", time: "2:30 PM - 4:30 PM", link: "/apicalypse" },
    { day: 28, month: 1, year: 2025, title: "Machine Minds Day 1", time: "2:30 PM - 4:30 PM", link: "/machine_minds" },
    { day: 29, month: 1, year: 2025, title: "Machine Minds Day 2", time: "2:30 PM - 4:30 PM", link: "/machine_minds" },
    { day: 22, month: 2, year: 2025, title: "Financialy Literacy & Awareness Program", time: "1:30 PM onwards", link: "/financial_literacy" },
    { day: 19, month: 3, year: 2025, title: "NEX-IOT Day 1", time: "2:30 PM - 4:30 PM", link: "/nexiot" },
    { day: 20, month: 3, year: 2025, title: "NEX-IOT Day 2", time: "2:30 PM - 4:30 PM", link: "/nexiot" },
    { day: 25, month: 3, year: 2025, title: "Wealth Wars (Praxis 25)", time: "2:30 PM onwards", link: "/wealth_wars" },
    { day: 7, month: 4, year: 2025, title: "Melange 25 (Symposium)", time: "2:30 PM - 4:30 PM", link: "/melange" },
    { day: 4, month: 7, year: 2025, title: "MONGO.INIT() Day 1", time: "2:30 PM - 4:30 PM", link: "/mongo" },
    { day: 5, month: 7, year: 2025, title: "MONGO.INIT() Day 2", time: "2:30 PM - 4:30 PM", link: "/mongo" },
    { day: 17, month: 7, year: 2025, title: "BUILD.PCB Day 1", time: "2:30 PM", link: "/pcb" },
    { day: 18, month: 7, year: 2025, title: "BUILD.PCB Day 2", time: "2:30 PM", link: "/pcb" },
    { day: 31, month: 7, year: 2025, title: "UI/UX Workshop Day 1", time: "2:30 PM", link: "/uiux25" },
    { day: 1, month: 8, year: 2025, title: "UI/UX Workshop Day 2", time: "2:30 PM", link: "/uiux25" }
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();
  const initialDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const [currentDate, setCurrentDate] = useState(initialDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const hasEventsInMonth = (y, m) => {
    return events.some(e => e.year === y && e.month === m + 1);
  };

  const findPrevEventMonth = () => {
    let y = year;
    let m = month - 1;

    while (y >= 2024) {
      if (m < 0) {
        m = 11;
        y--;
      }
      if (hasEventsInMonth(y, m)) {
        return new Date(y, m, 1);
      }
      m--;
    }
    return currentDate;
  };

  const findNextEventMonth = () => {
    let y = year;
    let m = month + 1;

    while (y <= 2025) {
      if (m > 11) {
        m = 0;
        y++;
      }
      if (hasEventsInMonth(y, m)) {
        return new Date(y, m, 1);
      }
      m++;
    }
    return currentDate;
  };

  const handlePrevMonth = () => {
    setCurrentDate(findPrevEventMonth());
  };

  const handleNextMonth = () => {
    setCurrentDate(findNextEventMonth());
  };

  return (
    <div className="calendar">
      <h2 className="text-center my-8 uppercase">Our Events</h2>

      <div className="flex justify-between items-center mb-6 px-4">
        <button onClick={handlePrevMonth} className="month-nav-btn">← Prev</button>
        <h3 className="text-xl font-semibold">{monthNames[month]} {year}</h3>
        <button onClick={handleNextMonth} className="month-nav-btn">Next →</button>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day, index) => {
          const dayOfWeek = daysOfWeek[index % 7];
          const event = events.find(
            (e) => e.day === day && e.month === month + 1 && e.year === year
          );

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={index}
              className={`day ${isToday ? "highlight" : ""}`}
              onClick={() => event && (window.location.href = event.link)}
              style={{ cursor: event ? "pointer" : "default" }}
            >
              <div className="day-content">
                <span className="day-of-week">{dayOfWeek}</span>
                <hr />
                <span className="date">{day || ""}</span>
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
