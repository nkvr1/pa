import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CompaniesAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data1 = useSelector((state) => state.CompaniesState.posts);

  const [data, setData] = useState(data1);

  const [newRowData, setNewRowData] = useState({
    id: data.length + 1,
    title: "",
    body: "",
  });

  const handleTitleChange = (e) => {
    setNewRowData({ ...newRowData, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setNewRowData({ ...newRowData, body: e.target.value });
  };

  const handleAddNewRow = () => {
    if (newRowData.title && newRowData.body) {
      const newRowsData = {
        id: data.length + 1,
        title: newRowData.title,
        body: newRowData.body,
      };
      setData([...data, newRowsData]);
      console.log(data);
      dispatch({ type: "ADD_ROW_SUCCESS", payload: newRowData });
      navigate("/Companies");
      setNewRowData({ title: "", body: "" });
    } else {
      alert("Please enter both title and body");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newRowData.title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <input
        type="text"
        value={newRowData.body}
        onChange={handleBodyChange}
        placeholder="Body"
      />
      <button onClick={handleAddNewRow}>Add New Row</button>
    </div>
  );
};

export default CompaniesAdd;
