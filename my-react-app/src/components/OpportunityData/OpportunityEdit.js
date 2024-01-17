import React, { useEffect, useState } from "react";

import { editData } from "../../ActionData/OpportunityActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const OpportunityEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState({});
  const id = useSelector((state) => state.OpportunityState.row);

  const tableData = useSelector((state) => state.OpportunityState.newData);

  useEffect(() => {
    const Data = tableData.find((row) => row.id === parseInt(id));
    setRowData(Data);
  }, [id, tableData]);
  console.log(rowData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRowData({ ...rowData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editData(id, rowData));
    navigate("/Opportunity");
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {id}</p>
      <div>
        <h2>Edit Row</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={rowData.title}
            onChange={handleInputChange}
          />
          <label>body:</label>
          <input
            type="text"
            name="body"
            value={rowData.body}
            onChange={handleInputChange}
          />
          <label>level:</label>
          {/* <input
            type="text"
            name="level"
            value={rowData.level}
            onChange={handleInputChange}
          /> */}
          <select
            id="mySelect"
            value={rowData.level}
            name="level"
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Midem">Midem</option>
            <option value="High">High</option>
          </select>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default OpportunityEdit;
