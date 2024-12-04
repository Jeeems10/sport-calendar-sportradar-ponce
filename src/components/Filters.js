import React, { useState } from "react";

const Filters = ({ events, setFilteredEvents }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    sport: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleFilter = () => {
    const filtered = events.filter((event) => {
      const eventDate = new Date(event.dateVenue);
      const fromDate = filterCriteria.dateFrom ? new Date(filterCriteria.dateFrom) : null;
      const toDate = filterCriteria.dateTo ? new Date(filterCriteria.dateTo) : null;

      return (
        (!filterCriteria.sport ||
          event.sport.toLowerCase().includes(filterCriteria.sport.toLowerCase())) &&
        (!fromDate || eventDate >= fromDate) &&
        (!toDate || eventDate <= toDate)
      );
    });
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <h3>Filter Events</h3>
      <label>
        Sport:
        <input
          type="text"
          value={filterCriteria.sport}
          onChange={(e) => setFilterCriteria({ ...filterCriteria, sport: e.target.value })}
        />
      </label>
      <label>
        Date From:
        <input
          type="date"
          value={filterCriteria.dateFrom}
          onChange={(e) => setFilterCriteria({ ...filterCriteria, dateFrom: e.target.value })}
        />
      </label>
      <label>
        Date To:
        <input
          type="date"
          value={filterCriteria.dateTo}
          onChange={(e) => setFilterCriteria({ ...filterCriteria, dateTo: e.target.value })}
        />
      </label>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filters;

