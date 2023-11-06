import React from "react";
import { Link } from "react-router-dom";

const HogTile = ({ hog, hogs, setHogs }) => {
  const handleHide = () => {
    const filteredHogs = hogs.filter((hoggie) => hog !== hoggie);
    setHogs(filteredHogs);
  };

  return (
    <>
      <Link to={`/hogs/${hog.name}`}>
        <div class="ui card eight wide column" style={{ cursor: "pointer" }}>
          <div class="image">
            <img src={hog.image} />
          </div>
          <div class="content">
            <a class="header">{hog.name}</a>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HogTile;
