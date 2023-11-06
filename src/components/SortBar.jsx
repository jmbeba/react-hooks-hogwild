import React from "react";

const SortBar = ({ sortBy, setSortBy }) => {
  const options = ["default", "name", "weight"];

  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Sort by:</h3>
      <div className="ui buttons">
          {options.map((option) => (
            <button key={option} onClick={() => setSortBy(option)} className={`ui button ${sortBy === option ? 'primary' : ''}`}>
                {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SortBar;
