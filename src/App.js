import React, { useState } from 'react';
import Calendar from './components/Calendar';
import sportData from './data/sportData.json';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDetail from './components/EventDetail';

function App() {
  const [events, setEvents] = useState(sportData.data); // Kombiniere bestehende Events und neue Events

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]); // Füge neue Events hinzu
  };

  return (
    <Router>
      <div className="App">
        <h1>Sports Event Calendar</h1>
        <p>Welcome to the Sport Calendar App!</p>
        <Routes>
          <Route path="/" element={<Calendar events={events} addEvent={addEvent} />} />
          <Route path="/event/:eventId" element={<EventDetail events={events} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
