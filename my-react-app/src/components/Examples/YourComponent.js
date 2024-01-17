import React, { useState } from "react";

function YourComponent() {
  const [table1, setTable1] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    // Add more rows as needed
  ]);

  const [table2, setTable2] = useState([]);

  const [title, setTitle] = useState("New Title");
  const [date, setDate] = useState("2023-10-26");

  // Function to add title and date to table2
  const addTitleAndDateToTable2 = () => {
    const newRow = { id: table1.length + 1, name: `${title} - ${date}` };
    setTable2([...table2, newRow]);
  };

  return (
    <div>
      <h2>Table 1</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {table1.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Table 2</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {table2.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTitleAndDateToTable2}>
          Add Title and Date to Table 2
        </button>
      </div>
    </div>
  );
}

export default YourComponent;
