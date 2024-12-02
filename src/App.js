import React from 'react'
import Calendar from './components/Calendar';
import sportData from './data/sportData.json';
import './App.css'


function App() {
  return (
    <div className="App">
     <h1>Sports Event Calender</h1>
     <p>Welcome to the Sport Calendar App!</p>
     <Calendar events={sportData.data} />
    </div>
  );
}

export default App;
