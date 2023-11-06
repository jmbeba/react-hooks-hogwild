import React, { useState } from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

const Hogs = ({ filter, sortBy }) => {
  const [dbHogs, setdbHogs] = useState(hogs);
  const filteredHogs = dbHogs.filter((hog) => {
    if (filter === "Default") return true;

    return filter === hog.greased;
  });

  filteredHogs.sort((a, b) => {
    if (sortBy === "default") {
      return filteredHogs;
    }

    return a[sortBy] > b[sortBy] ? 1 : -1;
  });

  return (
    <div className="ui grid container cards">
      {filteredHogs.map((hog) => (
        <HogTile hog={hog} hogs={dbHogs} setHogs={setdbHogs}/>
      ))}
    </div>
  );
};

export default Hogs;
