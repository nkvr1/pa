import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home1 from "./Home1";
import Sidebar from "./Sidebar";

function Data({ onDataFromChild }) {
  const [hie, setHie] = useState(true);
  const setToken = (data) => {
    console.log("data");
    setHie(data);
  };
  onDataFromChild(hie);

  console.log("data");
  return (
    <div className="App">
      <Header setToken={setToken} />
      <div className="flex-container">
        <Sidebar />
        <Home1 />
      </div>
    </div>
  );
}

export default Data;
