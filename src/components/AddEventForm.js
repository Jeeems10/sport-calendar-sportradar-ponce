import React, { useState } from 'react';

const AddEventForm = ({ currentDate, addEvent }) => {
  const [formData, setFormData] = useState({
    dateVenue: currentDate.toISOString().split('T')[0],
    timeVenueUTC: '12:00:00',
    sport: '',
    homeTeam: '',
    awayTeam: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      id: `${Date.now()}`, // Unique ID
      homeTeam: { name: formData.homeTeam },
      awayTeam: { name: formData.awayTeam },
    };
    addEvent(newEvent);
    setFormData({
      dateVenue: currentDate.toISOString().split('T')[0],
      timeVenueUTC: '12:00:00',
      sport: '',
      homeTeam: '',
      awayTeam: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <h3>Add New Event</h3>
      <label>
        Date:
        <input
          type="date"
          name="dateVenue"
          value={formData.dateVenue}
          onChange={handleChange}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="timeVenueUTC"
          value={formData.timeVenueUTC}
          onChange={handleChange}
        />
      </label>
      <label>
        Sport:
        <input
          type="text"
          name="sport"
          value={formData.sport}
          onChange={handleChange}
        />
      </label>
      <label>
        Home Team:
        <input
          type="text"
          name="homeTeam"
          value={formData.homeTeam}
          onChange={handleChange}
        />
      </label>
      <label>
        Away Team:
        <input
          type="text"
          name="awayTeam"
          value={formData.awayTeam}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;