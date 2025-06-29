import React, { useState } from "react";
import "../pages/Calendar.css"
import Footer from "../components/Footer";
import TsavoGallery3 from '../assets/Tsavo gallery 3.jpg';
import Samburu1 from '../assets/Samburu 1.jpg';
import MaasaiMaraGallery6 from '../assets/Maasai Mara Gallery 6.jpg';
import AmboseliGallery4 from '../assets/Amboseli Gallery 4.jpeg';

const Calendar = () => {
  console.log("Calendar component rendered");
  const [activeTab, setActiveTab] = useState("all");
  const safaris = [
    {
      id: 1,
      month: "September",
      year: 2025,
      location: "Tsavo National Parks (East & West)",
      dates: "Friday, 19th to Sunday, 21st September",
      description:
          "Enjoy a scenic and wildlife-rich escape to Kenya's largest park, combining Tsavo East and West for a blend of vast plains, volcanic landscapes, and red elephants.",
      image:TsavoGallery3,
      color: "bg-stone-600",
      lightColor: "bg-stone-100",
      available: true,
    },
    {
      id: 2,
      month: "October",
      year: 2025,
      location: "Samburu National Reserve",
      dates: "Saturday, 19th to Monday, 21st October",
      description:
          "Explore the rugged beauty of Samburu, home to rare northern species and dramatic riverine landscapes. Ideal for travelers seeking an off-the-beaten-path experience.",
      image:Samburu1,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      available: true,
    },
    {
      id: 3,
      month: "November",
      year: 2025,
      location: "Maasai Mara National Reserve",
      dates: "Friday, 14th to Sunday, 16th November",
      description:
          "Visit the Mara after the migration season, when predator activity is still high and the landscape remains lush. A quiet yet rewarding time for wildlife photography.",
      image:MaasaiMaraGallery6,
      color: "bg-rose-500",
      lightColor: "bg-rose-100",
      available: true,
    },
    {
      id: 4,
      month: "December",
      year: 2025,
      location: "Amboseli National Park",
      dates: "Friday, 5th to Sunday, 7th December",
      description:
          "Spend three days surrounded by open savannahs and iconic elephant herds with breathtaking backdrops of Mount Kilimanjaro.",
      image:AmboseliGallery4,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      available: true,
    },
  ];


  const renderCalendarDays = (month, year, highlightDays) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    for (let i = 1; i <= daysInMonth; i++) {
      const isHighlighted = highlightDays.includes(i);
      days.push(
        <div key={i} className={`calendar-cell ${isHighlighted ? "highlighted" : "dimmed"}`}>{i}</div>
      );
    }
    return days;
  };

  const getHighlightDays = (dateString) => {
    const matches = dateString.match(/(\d+)(st|nd|rd|th)/g);
    return matches ? matches.map(m => parseInt(m.replace(/\D/g, ""))) : [];
  };

  return (
    <div className="safari-container">

      {/* Filters */}
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("all")} className={`tab-button ${activeTab === "all" ? "active" : ""}`}>
          All Safaris
        </button>
        {safaris.map((safari) => (
          <button
            key={safari.id}
            onClick={() => setActiveTab(safari.month.toLowerCase())}
            className={`tab-button ${activeTab === safari.month.toLowerCase() ? "active-month" : ""}`}
          >
            {safari.month}
          </button>
        ))}
      </div>

      {/* Safari Cards */}
      <div className="cards-section">
        {safaris
          .filter((s) => activeTab === "all" || activeTab === s.month.toLowerCase())
          .map((safari) => (
            <div key={safari.id} className="safari-card">
              <div className="safari-image">
                <img src={safari.image} alt={safari.location} />
                <div className="month-badge">{safari.month} {safari.year}</div>
              </div>
              <div className="safari-details">
                <h2>{safari.location}</h2>
                <p className="dates">{safari.dates}</p>
                <p className="desc">{safari.description}</p>
                <div className="safari-meta">
                  <span>3 days, 2 nights</span>
                  <span>4x4 Land Cruiser</span>
                </div>
                <div className="calendar-status">
                  <div className="mini-calendar">
                    <div className="calendar-header">{safari.month} {safari.year}</div>
                    <div className="calendar-grid">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div key={i} className="day-label">{d}</div>
                      ))}
                      {renderCalendarDays(
                        ["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(safari.month) + 1,
                        safari.year,
                        getHighlightDays(safari.dates)
                      )}
                    </div>
                  </div>
                  <div className="availability">
                    <span className={`dot ${safari.available ? "green" : "red"}`}></span>
                    <span>{safari.available ? "Spaces Available" : "Fully Booked"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
