import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = ({ events }) => {
  const { eventId } = useParams();
  const [day, index] = eventId.split('-');
  const event = events.find(
    (event, idx) =>
      `${new Date(event.dateVenue).getDate()}-${idx}` === eventId
  );
  
  if (!event) {
    return <h2>Event not found</h2>;
  }
  

  return (
    <div>
      <h2>Event Details</h2>
      <p><strong>Date:</strong> {event.dateVenue}</p>
      <p><strong>Time:</strong> {event.timeVenueUTC}</p>
      <p><strong>Sport:</strong> {event.sport}</p>
      <p><strong>Home Team:</strong> {event.homeTeam?.name || 'TBD'}</p>
      <p><strong>Away Team:</strong> {event.awayTeam?.name || 'TBD'}</p>
      {event.result && (
        <>
          <p><strong>Score:</strong> {event.result.homeGoals} - {event.result.awayGoals}</p>
          <p><strong>Winner:</strong> {event.result.winner || 'TBD'}</p>
        </>
      )}
    </div>
  );
};


export default EventDetail;
