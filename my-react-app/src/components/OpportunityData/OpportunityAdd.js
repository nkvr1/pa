import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../../ActionData/OpportunityActions";

const OpportunityAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data1 = useSelector((state) => state.OpportunityState.newData);

  const [data, setData] = useState(data1);

  const [newRowData, setNewRowData] = useState({
    id: data.length + 1,
    title: "",
    body: "",
    level: "",
  });

  const handleTitleChange = (e) => {
    setNewRowData({ ...newRowData, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setNewRowData({ ...newRowData, body: e.target.value });
  };

  const handleLevelChange = (e) => {
    setNewRowData({ ...newRowData, level: e.target.value });
  };

  const handleAddNewRow = () => {
    const newRowsData = {
      id: data.length + 1,
      title: newRowData.title,
      body: newRowData.body,
      level: newRowData.level,
    };
    setData([...data, newRowsData]);
    console.log(data);
    dispatch(addData(newRowsData));
    navigate("/Opportunity");
    setNewRowData({ title: "", body: "", level: "" });
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
      {/* <input
        type="text"
        value={newRowData.level}
        onChange={handleLevelChange}
        placeholder="Level"
      /> */}
      <select
        id="mySelect"
        value={newRowData.level}
        onChange={handleLevelChange}
      >
        <option value="">Select an option</option>
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddNewRow}>Add New Row</button>
    </div>
  );
};

export default OpportunityAdd;
