import React, { useState } from "react";
import "./Calendar.css";

const events = [
  { day: 13, month: 8, year: 2024, title: "Crypto Chrome", time: "3:00 PM - 4:30 PM", link: "/crypto_chrome",tag:"Workshop" },
    { day: 21, month: 8, year: 2024, title: "UI/UX Workshop Day 1", time: "3:00 PM - 4:30 PM", link: "/uiux",tag:"Workshop" },
    { day: 22, month: 8, year: 2024, title: "UI/UX Workshop Day 2", time: "3:00 PM - 4:30 PM", link: "/uiux",tag:"Workshop" },
    { day: 12, month: 9, year: 2024, title: "Campus Quest Day 1", time: "2:30 PM", link: "/hpomen",tag:"Competition" },
    { day: 13, month: 9, year: 2024, title: "Campus Quest Day 2", time: "2:30 PM", link: "/hpomen",tag:"Competition" },
    { day: 5, month: 10, year: 2024, title: "Technical Paper Presentation", time: "4:00 PM", link: "/paperquest",tag:"Talk" },
    { day: 14, month: 10, year: 2024, title: "UI/UX Competition", time: "2:30 PM", link: "/uiux_competition",tag:"Competition" },
    { day: 16, month: 12, year: 2024, title: "Flutter Workshop Day 1", time: "2:30 PM - 3:30 PM", link: "/flutter",tag:"Workshop" },
    { day: 17, month: 12, year: 2024, title: "Flutter Workshop Day 2", time: "2:30 PM - 3:30 PM", link: "/flutter",tag:"Workshop" },
    { day: 18, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter",tag:"Workshop" },
    { day: 19, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter",tag:"Workshop" },
    { day: 20, month: 12, year: 2024, title: "Flutter Workshop Project Development", time: "", link: "/flutter",tag:"Workshop" },
    { day: 8, month: 1, year: 2025, title: "APIcalypse Day 1", time: "2:30 PM - 4:30 PM", link: "/apicalypse",tag:"Workshop" },
    { day: 9, month: 1, year: 2025, title: "APIcalypse Day 2", time: "2:30 PM - 4:30 PM", link: "/apicalypse",tag:"Workshop" },
    { day: 28, month: 1, year: 2025, title: "Machine Minds Day 1", time: "2:30 PM - 4:30 PM", link: "/machine_minds",tag:"Workshop" },
    { day: 29, month: 1, year: 2025, title: "Machine Minds Day 2", time: "2:30 PM - 4:30 PM", link: "/machine_minds",tag:"Workshop" },
    { day: 22, month: 2, year: 2025, title: "Financialy Literacy & Awareness Program", time: "1:30 PM onwards", link: "/financial_literacy",tag:"Talk" },
    { day: 19, month: 3, year: 2025, title: "NEX-IOT Day 1", time: "2:30 PM - 4:30 PM", link: "/nexiot",tag:"Workshop" },
    { day: 20, month: 3, year: 2025, title: "NEX-IOT Day 2", time: "2:30 PM - 4:30 PM", link: "/nexiot" ,tag:"Workshop" },
    { day: 25, month: 3, year: 2025, title: "Wealth Wars (Praxis 25)", time: "2:30 PM onwards", link: "/wealth_wars",tag:"Competition" },
    { day: 7, month: 4, year: 2025, title: "Melange 25 (Symposium)", time: "2:30 PM - 4:30 PM", link: "/melange",tag:"Talk" },
    { day: 4, month: 7, year: 2025, title: "MONGO.INIT() Day 1", time: "2:30 PM - 4:30 PM", link: "/mongo",tag:"Workshop" },
    { day: 5, month: 7, year: 2025, title: "MONGO.INIT() Day 2", time: "2:30 PM - 4:30 PM", link: "/mongo",tag:"Workshop" },
    { day: 17, month: 7, year: 2025, title: "BUILD.PCB Day 1", time: "2:30 PM", link: "/pcb",tag:"Workshop" },
    { day: 18, month: 7, year: 2025, title: "BUILD.PCB Day 2", time: "2:30 PM", link: "/pcb" ,tag:"Workshop "},
    { day: 31, month: 7, year: 2025, title: "UI/UX Workshop Day 1", time: "2:30 PM", link: "/uiux25",tag:"Workshop" },
    { day: 1, month: 8, year: 2025, title: "UI/UX Workshop Day 2", time: "2:30 PM", link: "/uiux25",tag:"Workshop" },
    { day: 23, month: 3, year: 2026, title: "Machine Minds Day 1", time: "2:30 PM", link: "/machine_minds",tag:"Workshop" },
    { day: 24, month: 3, year: 2026, title: "Machine Minds Day 2", time: "2:30 PM", link: "/machine_minds",tag:"Workshop" },
    { day: 13, month: 2, year: 2026, title: "Capture the Flag", time: "12:30 PM", link: "/CTF",tag:"Workshop" },
    { day: 4, month: 1, year: 2026, title: "Arcane Hackathon", time: "24 Hrs Online", link: "/Arcane",tag:"Workshop" },
    { day: 10, month: 4, year: 2026, title: "Melange 26 (Symposium)", time: "2:30 PM ", link: "/symp2",tag:"Workshop" }
  
];

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const tagColors = {
  Workshop: "tag-workshop",
  Competition: "tag-competition",
  Talk: "tag-talk",
  Hackathon: "tag-hackathon",
};

// ── Helpers ──────────────────────────────────────────────────────────────────



/**
 * Read the last saved month/year from localStorage.
 * Falls back to the current real-world month/year.
 */
function getInitialView() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const { month, year } = JSON.parse(saved);
      if (Number.isInteger(month) && Number.isInteger(year)) {
        return { month, year };
      }
    }
  } catch (_) {
    // ignore parse errors
  }
   // ✅ Default to current date
  return { month: now.getMonth() + 1, year: now.getFullYear() };
}

// ── Component ─────────────────────────────────────────────────────────────────

const Calendar = () => {
  const now = new Date();

const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1);
const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const years = [...new Set(events.map((e) => e.year))].sort();

  // Persist selection whenever it changes
  const changeMonth = (month) => {
    setSelectedMonth(month);
   
  };

  const changeYear = (year) => {
    setSelectedYear(year);
   
  };

  const filteredEvents = events.filter(
    (e) => e.month === selectedMonth && e.year === selectedYear
  );

  const allYearEvents = events.filter((e) => e.year === selectedYear);
  const totalEvents = allYearEvents.length;
  const maxMonthCount = Math.max(
    ...monthNames.map((_, i) =>
      events.filter((e) => e.month === i + 1 && e.year === selectedYear).length
    ),
    1
  );

  const sidebarEvents = allYearEvents
    .filter((e) => e.month !== selectedMonth)
    .slice(0, 4);

  return (
    <div className="ec-root">
      <div className="ec-inner">

        {/* ── Header ── */}
        <div className="ec-header">
          <div className="ec-title-group">
            <h2 className="ec-title">Our <em>Events</em></h2>
          </div>

          <div className="ec-header-right">
            <div className="ec-stat-pill">
              <span className="ec-stat-num">{totalEvents}</span>
              <span className="ec-stat-label">events in {selectedYear}</span>
            </div>
            <div className="ec-filters">
              <div className="ec-select-wrap">
                <select
                  className="ec-select"
                  value={selectedMonth}
                  onChange={(e) => changeMonth(Number(e.target.value))}
                >
                  {monthNames.map((name, i) => (
                    <option key={i} value={i + 1}>{name}</option>
                  ))}
                </select>
              </div>
              <div className="ec-select-wrap">
                <select
                  className="ec-select"
                  value={selectedYear}
                  onChange={(e) => changeYear(Number(e.target.value))}
                >
                  {years.map((yr) => (
                    <option key={yr} value={yr}>{yr}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Month label ── */}
        <div className="ec-month-label">
          <span className="ec-month-name">{monthNames[selectedMonth - 1]}</span>
          <span className="ec-month-count">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
          </span>
          <div className="ec-month-line" />
        </div>

        {filteredEvents.length === 0 ? (
          /* ── Empty state ── */
          <div className="ec-empty-state">
            <div className="ec-empty-hero">
              <div className="ec-empty-icon">📭</div>
              <strong>No events in {monthNames[selectedMonth - 1]}</strong>
              <p>But here's what's happening in {selectedYear}:</p>
            </div>

            <div className="ec-suggest-grid">
              {monthNames.map((name, i) => {
                const monthEvts = events.filter(e => e.month === i + 1 && e.year === selectedYear);
                if (monthEvts.length === 0) return null;
                return (
                  <div
                    key={i}
                    className="ec-suggest-month"
                    onClick={() => changeMonth(i + 1)}
                  >
                    <div className="ec-suggest-header">
                      <span className="ec-suggest-name">{name}</span>
                      <span className="ec-suggest-badge">{monthEvts.length} event{monthEvts.length !== 1 ? "s" : ""}</span>
                    </div>
                    <div className="ec-suggest-list">
                      {monthEvts.map((evt, j) => (
                        <div key={j} className="ec-suggest-row">
                          <span className="ec-suggest-day">{evt.day}</span>
                          <span className="ec-suggest-title">{evt.title}</span>
                        </div>
                      ))}
                    </div>
                    <div className="ec-suggest-cta">View {name} →</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="ec-layout">

            {/* ── Left: main event cards ── */}
            <div className="ec-main">
              <div className="ec-cards">
                {filteredEvents.map((event, i) => (
                  <a key={i} className="ec-card" href={event.link}>
                    <div className="ec-card-date">
                      <span className="ec-card-day">{event.day}</span>
                      <span className="ec-card-mon">{monthNames[event.month - 1].slice(0, 3).toUpperCase()}</span>
                    </div>
                    <div className="ec-card-body">
                      <span className={`ec-tag ${tagColors[event.tag]}`}>{event.tag}</span>
                      <h3 className="ec-card-title">{event.title}</h3>
                      <p className="ec-card-time">◷ {event.time}</p>
                    </div>
                    <div className="ec-card-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: sidebar ── */}
            <aside className="ec-sidebar">
              <div>
                <p className="ec-sidebar-heading">Other months</p>
                {sidebarEvents.length > 0 ? (
                  sidebarEvents.map((event, i) => (
                    <a
                      key={i}
                      className="ec-sidebar-item"
                      href={event.link}
                      onClick={(e) => {
                        e.preventDefault();
                        changeMonth(event.month);
                        changeYear(event.year);
                      }}
                    >
                      <div className="ec-sb-badge">
                        <span className="ec-sb-day">{event.day}</span>
                        <span className="ec-sb-mon">{monthNames[event.month - 1].slice(0, 3)}</span>
                      </div>
                      <div className="ec-sb-info">
                        <p className="ec-sb-title">{event.title}</p>
                        <p className="ec-sb-time">{event.time}</p>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="ec-sb-none">No other events this year.</p>
                )}
              </div>
            </aside>

          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;