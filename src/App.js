import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import AddEventPage from './components/AddEventPage';
import Navbar from './components/Navbar';
import sportData from './data/sportData.json';

function App() {
  const [events, setEvents] = useState(sportData.data);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Sports Event Calendar</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calendar events={events} />} />
          <Route
            path="/add-event"
            element={<AddEventPage addEvent={addEvent} currentDate={new Date()} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
