import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetail.css";

const EventDetail = ({ events }) => {
  const { eventIds } = useParams();
  const ids = eventIds.split(",");
  const dayEvents = events.filter((event) => ids.includes(event.id));

  if (dayEvents.length === 0) {
    return <h2>No events found for this day</h2>;
  }

  return (
    <div className="event-detail-container">
      <h2>Event Details</h2>
      <div
        className={`event-detail-grid ${
          dayEvents.length === 1 ? "single-event" : ""
        }`}
      >
        {dayEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>Game {index + 1}</h3>
            <p>
              <strong>Date:</strong> {event.dateVenue}
            </p>
            <p>
              <strong>Time:</strong> {event.timeVenueUTC}
            </p>
            <p>
              <strong>Sport:</strong> {event.sport}
            </p>
            <p>
              <strong>Home Team:</strong> {event.homeTeam?.name || "TBD"}
            </p>
            <p>
              <strong>Away Team:</strong> {event.awayTeam?.name || "TBD"}
            </p>
            {event.result && (
              <>
                <p>
                  <strong>Score:</strong> {event.result.homeGoals} -{" "}
                  {event.result.awayGoals}
                </p>
                <p>
                  <strong>Winner:</strong> {event.result.winner || "TBD"}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
