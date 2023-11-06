import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  const options = [
    {
      name: "Default",
      value: "Default",
    },
    {
      name: "Is Greased",
      value: true,
    },
    {
      name: "Is Not Greased",
      value: false,
    },
  ];

  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Filter by:</h3>
      <div className="ui buttons">
        {options.map(({ value, name }) => (
          <button
            className={`ui button ${filter === value ? "primary" : ""}`}
            onClick={() => setFilter(value)}
            key={value}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
