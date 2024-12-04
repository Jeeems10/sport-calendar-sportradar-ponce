import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import AddEventPage from './components/AddEventPage';
import EventDetail from './components/EventDetail';
import Navbar from './components/Navbar';
import sportData from './data/sportData.json';
import './App.css';

function App() {
  const [events, setEvents] = useState(
    sportData.data.map((event, index) => ({ ...event, id: `${index}-${event.dateVenue}` }))
  );
  const [filteredEvents, setFilteredEvents] = useState(events);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, { ...newEvent, id: `${events.length}-${newEvent.dateVenue}` }];
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents); // Aktualisiere auch gefilterte Events
  };

  return (
    <Router>
      <div className="App">
        <h1>Sports Event Calendar</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Calendar
                // events={events}
                addEvent={addEvent}
                filteredEvents={filteredEvents}
                setFilteredEvents={setFilteredEvents}
              />
            }
          />
          <Route
            path="/add-event"
            element={<AddEventPage addEvent={addEvent} currentDate={new Date()} />}
          />
          <Route path="/event/:eventIds" element={<EventDetail events={events} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

