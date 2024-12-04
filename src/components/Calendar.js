import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';
import AddEventForm from './AddEventForm';
import Filters from './Filters';

const Calendar = ({ events, addEvent, filteredEvents, setFilteredEvents }) => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1)); // Standard: November 2024

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const getEventsForDay = (day) => {
    return filteredEvents.filter((event) => {
      const eventDate = new Date(event.dateVenue);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  const handleDayClick = (eventsForDay) => {
    navigate(`/event/${eventsForDay[0].id}`);
  };

  const days = Array.from(
    { length: daysInMonth(currentDate.getMonth(), currentDate.getFullYear()) },
    (_, i) => i + 1
  );

  const getWeekday = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const weekday = date.toLocaleString('default', { weekday: 'short' }); // Kurzform von Wochentagen (z. B. Mo, Di)
    const formattedDate = date.toLocaleDateString('de-DE', { day: 'numeric', month: 'numeric' }); // Formatiertes Datum
    return { weekday, formattedDate };
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>←</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>→</button>
      </div>
      {/* <AddEventForm currentDate={currentDate} addEvent={addEvent} /> */}
      <Filters events={events} setFilteredEvents={setFilteredEvents} />
      <div className="calendar">
        {days.map((day) => {
          const eventsForDay = getEventsForDay(day);
          const hasEvent = eventsForDay.length > 0;
          const { weekday, formattedDate } = getWeekday(day);

          return (
            <div
              key={day}
              className={`calendar-day ${hasEvent ? 'event-day' : ''}`}
              onClick={hasEvent ? () => handleDayClick(eventsForDay) : null}
            >
              <span className="weekday">{weekday}</span>
              <span className="date">{formattedDate}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
