import React from 'react'
import Calendar from './components/Calendar';
import sportData from './data/sportData.json';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDetail from './components/EventDetail';


function App() {
  return (
    <Router>
    <div className="App">
     <h1>Sports Event Calender</h1>
     <p>Welcome to the Sport Calendar App!</p>
     <Routes>
      <Route path='/' element={<Calendar events={sportData.data} />} />
      <Route path='/event/:eventId' element={<EventDetail events={sportData.data} />} />
     </Routes>
     
    </div>
    </Router>
  );
}

export default App;
