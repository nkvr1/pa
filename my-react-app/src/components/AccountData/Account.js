import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddAccount from "./AddAccount";
import AccountTable from "./AccountTable";
import AccountEidt from "./AccountEidt";
function Account() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data using GET method
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [initialData, setInitialData] = useState([
    {
      id: 1,
      name: "Pavan",
      PhoneNumber: 9000025100,
      Organization: "Goa",
      ContactName: [{ label: "9876554779" }],
      Status: "single",
      Attachment:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Sri",
      PhoneNumber: 9403205430,
      Organization: "AP",
      ContactName: [{ label: "9876554779", value: "79876554779" }],
      Status: "single",
      EmailAddress: "pavan@gamil.com",
    },
    {
      id: 3,
      name: "Prudhvi",
      PhoneNumber: 8439202828,
      Organization: "Goa",
      ContactName: [{ label: "9876554779", value: "79876554779" }],
      Status: "married",
    },
    {
      id: 4,
      name: "Varma",
      PhoneNumber: 9483726428,
      Organization: "Goa",
      ContactName: [{ label: "9876554779", value: "79876554779" }],
      Status: "single",
    },
    {
      id: 5,
      name: "Varma",
      PhoneNumber: 9483726428,
      Organization: "Goa",
      ContactName: [{ label: "9876554779", value: "79876554779" }],
      Status: "single",
    },
  ]);

  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const combined = data.map((item, index) => ({
      name: item.title,
      PhoneNumber: initialData[index] ? initialData[index].PhoneNumber : "",
      Organization: initialData[index] ? initialData[index].Organization : "",
      ContactName: [initialData[index] ? initialData[index].ContactName : ""],
      Status: initialData[index] ? initialData[index].Status : "",
      Attachment: initialData[index] ? initialData[index].Attachment : "",
      EmailAddress: initialData[index] ? initialData[index].EmailAddress : "",
    }));
    setCombinedData(combined);
  }, [initialData, data]);

  const navigate = useNavigate();
  const handleFormSubmit1 = (formData) => {
    setInitialData((prevDataArray) => [...prevDataArray, formData]);
  };

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (editedData) => {
    const updatedData = [...combinedData];
    updatedData[editIndex] = editedData;
    setCombinedData(updatedData);
    setEditIndex(null);
  };

  return (
    <div className="Home1">
      <Routes>
        <Route
          path="/AddAccount"
          element={
            <AddAccount
              handleSubmit={handleFormSubmit1}
              initialData={initialData}
            />
          }
        />
        <Route
          path="/"
          element={
            <AccountTable
              combinedData={combinedData}
              setCombinedData={setCombinedData}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/AccountEidt"
          element={
            <AccountEidt
              rowData={combinedData[editIndex]}
              onSave={handleSave}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Account;
