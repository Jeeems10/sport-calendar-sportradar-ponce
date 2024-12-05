import React, { useState } from "react";
import './Filter.css'

const Filters = ({ events = [], setFilteredEvents }) => {
  // State to manage filter criteria
  const [filterCriteria, setFilterCriteria] = useState({
    sport: "",
    dateFrom: "",
    dateTo: "",
  });

  /*Applies the selected filters to the events and updates the filtered events list.*/
  const handleFilter = () => {
    console.log("Applying filter with criteria:", filterCriteria);
    console.log("Original events:", events);

    // Validate the events array
    if (!events || !Array.isArray(events)) {
      console.error("Events are undefined or not an array");
      setFilteredEvents([]);// Reset filtered events if invalid
      return;
    }

    // Filter events based on criteria
    const filtered = events.filter((event) => {
      if (!event.dateVenue || !event.sport) {
        console.error("Invalid event:", event);
        return false;
      }

      const eventDate = new Date(event.dateVenue);
      const fromDate = filterCriteria.dateFrom
        ? new Date(`${filterCriteria.dateFrom}T00:00:00`)
        : null;
      const toDate = filterCriteria.dateTo
        ? new Date(`${filterCriteria.dateTo}T23:59:59`)
        : null;

       // Check if the event matches the selected sport
      const matchesSport = !filterCriteria.sport || event.sport.toLowerCase() === filterCriteria.sport.toLowerCase();
      // Check if the event falls within the date range
      const matchesFromDate = !fromDate || eventDate >= fromDate;
      const matchesToDate = !toDate || eventDate <= toDate;

      console.log({
        event: event.dateVenue,
        matchesSport,
        matchesFromDate,
        matchesToDate,
      });

      return matchesSport && matchesFromDate && matchesToDate;
    });

    console.log("Filtered events:", filtered);
    setFilteredEvents(filtered); // Update filtered events
  };

  return (
    <div className="filter-form">
      <label>
        Sport:
        <select
          value={filterCriteria.sport}
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, sport: e.target.value })
          }
        >
          <option value="">Select Sport</option>
          <option value="Basketball">Basketball</option>
          <option value="Football">Football</option>
          <option value="Hockey">Hockey</option>
          <option value="Baseball">Baseball</option>
          <option value="Cricket">Cricket</option>
        </select>
      </label>

      {/* Filter by start date */}
      <label>
        Date From:
        <input
          type="date"
          value={filterCriteria.dateFrom}
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, dateFrom: e.target.value })
          }
        />
      </label>

      {/* Filter by end date */}
      <label>
        Date To:
        <input
          type="date"
          value={filterCriteria.dateTo}
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, dateTo: e.target.value })
          }
        />
      </label>

      {/* Apply filter button */}
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};


export default Filters;
