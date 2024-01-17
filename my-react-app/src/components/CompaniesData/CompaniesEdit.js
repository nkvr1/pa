import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { handleEditData } from "../../ActionData/CompaniesAction";
import { useNavigate } from "react-router-dom";
const CompaniesEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState({});
  const id = useSelector((state) => state.CompaniesState.row);

  const tableData = useSelector((state) => state.CompaniesState.newData);

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
    dispatch(handleEditData(parseInt(id), rowData));
    navigate("/Opportunity");
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {id}</p>
      <div>
        <h2>Edit Row</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="title"
            value={rowData.title}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="body"
            value={rowData.body}
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CompaniesEdit;
