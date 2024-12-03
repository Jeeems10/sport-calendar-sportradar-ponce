import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css'

const Calendar = ({events}) => {
  const navigate = useNavigate();
  const daysInMonth = Array.from({length: 30}, (_, i) => i + 1);

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.dateVenue).getDate();
      return eventDate === day;
    } );
  };

  return (
    <div className="calendar">
        {daysInMonth.map(day => {
            const hasEvent = getEventsForDay(day).length > 0;

            return (
                <div
                    key={day}
                    className={`calendar-day ${hasEvent ? 'event-day' : ''}`}
                    onClick={hasEvent ? () => navigate(`/event/${day}`) : null}
                >
                    <span>{day}</span>
                </div>
            );
        })}
    </div>
    );
};

export default Calendar;