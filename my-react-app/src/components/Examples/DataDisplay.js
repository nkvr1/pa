import React, { useState } from "react";

const DataDisplay = () => {
  const [showData, setShowData] = useState(false);
  const [gptData, setGptData] = useState(null);

  const fetchData = async () => {
    // Make your API call to fetch data from ChatGPT
    // For instance:
    try {
      const response = await fetch("YOUR_GPT_API_ENDPOINT");
      const data = await response.json();
      setGptData(data); // Set the fetched data here
      setShowData(true); // Show the data once it's fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    fetchData(); // Call function to fetch data
  };

  return (
    <div>
      <button onClick={handleClick}>Show Data</button>
      {showData && (
        <div>
          {/* Display your fetched data here */}
          <p>{JSON.stringify(gptData)}</p>
          <p>jdnjn</p>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
