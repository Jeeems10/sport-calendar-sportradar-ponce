import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

const Calendar = ({ events }) => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1));

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const getEventsForDay = (day) => {
    return events.filter((event) => {
      const eventDate = new Date(event.dateVenue);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  const days = Array.from(
    { length: daysInMonth(currentDate.getMonth(), currentDate.getFullYear()) },
    (_, i) => i + 1
  );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>←</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>→</button>
      </div>
      <div className="calendar">
        {days.map((day) => {
          const eventsForDay = getEventsForDay(day);
          const hasEvent = eventsForDay.length > 0;

          return (
            <div
              key={day}
              className={`calendar-day ${hasEvent ? 'event-day' : ''}`}
              onClick={hasEvent ? () => navigate(`/event/${day}-${events.indexOf(eventsForDay[0])}`) : null}
            >
              <span>{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
