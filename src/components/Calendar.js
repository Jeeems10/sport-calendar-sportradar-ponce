import React from 'react';
import './Calendar.css'

const Calendar = ({events}) => {
  const daysInMonth = Array.from({length: 30}, (_, i) => i + 1);

  const getEventsForDay = (day) => {
    return events.filter(event => 
      new Date(event.dateVenue).getDate === day
    );
  };

  return(
    <div className='calendar'>
      {daysInMonth.map(day => (
        <div key={day} className='calendar-day'>
          <span>{day}</span>
          {getEventsForDay(day).length > 0 && (
            <div className='event-marker'>•</div>
          )}
        </div>
      ))}

    </div>
  );
};

export default Calendar;