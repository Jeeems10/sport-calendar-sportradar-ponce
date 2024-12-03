import React from 'react';
import AddEventForm from './AddEventForm';

const AddEventPage = ({ addEvent, currentDate }) => {
  return (
    <div>
      <h2>Add New Event</h2>
      <AddEventForm currentDate={currentDate} addEvent={addEvent} />
    </div>
  );
};

export default AddEventPage;
