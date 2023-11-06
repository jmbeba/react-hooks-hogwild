import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import { Route, Routes } from "react-router-dom";
import HogDetails from "./HogDetails";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";

function App() {
  const [filter, setFilter] = useState("Default");
  const [sortBy, setSortBy] = useState("default");

  return (
    <div className="App">
      <Nav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <FilterBar filter={filter} setFilter={setFilter} />
        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <Routes>
        <Route path="/" element={<Hogs filter={filter} sortBy={sortBy}/>} />
        <Route path="/hogs/:name" element={<HogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
