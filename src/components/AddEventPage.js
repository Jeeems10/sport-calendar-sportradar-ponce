import React from 'react';
import AddEventForm from './AddEventForm';
import './AddEventPage.css';

const AddEventPage = ({ addEvent, currentDate }) => {
  return (
    <div className="page-container"> {}
      <AddEventForm currentDate={currentDate} addEvent={addEvent} />
    </div>
  );
};

export default AddEventPage;
