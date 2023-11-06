import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import hogs from "../porkers_data";

const HogDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const foundHog = hogs.find((hog) => hog.name === name);

  if (!foundHog) navigate("/");

  return (
    <div style={{ marginTop: 10, display: "flex", flexDirection: "column", alignItems:'center' }}>
      <img style={{ height: 300 }} src={foundHog.image} alt={foundHog.name} />
      <h2>{foundHog.name}</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          fontWeight: "500",
        }}
      >
        <li>Specialty: {foundHog.specialty}</li>
        <li>Weight: {foundHog.weight}</li>
        <li>Greased: {foundHog.greased ? 'Yes' : 'No'}</li>
        <li>Highest Medal Achieved: {foundHog["highest medal achieved"]}</li>
      </ul>
      <button className="ui button" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default HogDetails;
