import { Route, Routes, useNavigate } from "react-router-dom";

import SimpleTable from "./components/SimpleTable";
import TableComponent1 from "./TableComponent1";
import SimpleTable1 from "./components/SimpleTable1";
import Addcases from "./components/AddCases";
import React, { useEffect, useState } from "react";
import Eidt from "./Eidt";
import Account from "./components/AccountData/Account";
import Contacts from "./components/ContactsData/Contacts";
import Opportunity from "./components/OpportunityData/Opportunity";
import Companies from "./components/CompaniesData/Companies";
function Home1() {
  const [initialData, setInitialData] = useState([
    {
      id: 1,
      name: "Pavan",
      Users: 25,
      Status: "Goa",
      Priority: "English",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9129123218",
    },
    {
      id: 2,
      name: "Sri",
      Users: 30,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "Ap",
      Contacts: "3792723218",
    },
    {
      id: 3,
      name: "Prudhvi",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9837123218",
    },
    {
      id: 4,
      name: "Varma",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "91291833928",
    },
    {
      id: 5,
      name: "Srinivasa",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9124543218",
    },
    {
      id: 6,
      name: "Raju",
      Users: 28,
      Status: "Goa",
      Priority: "telugu",
      Types: "CivilCases",
      Account: "india",
      Contacts: "91294434218",
    },
    {
      id: 7,
      name: "Pavan",
      Users: 25,
      Status: "Goa",
      Priority: "English",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9129123218",
    },
    {
      id: 8,
      name: "Sri",
      Users: 30,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "Ap",
      Contacts: "3792723218",
    },
    {
      id: 9,
      name: "Prudhvi",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9837123218",
    },
    {
      id: 10,
      name: "Varma",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "91291833928",
    },
    {
      id: 11,
      name: "Srinivasa",
      Users: 28,
      Status: "Goa",
      Priority: "hindi",
      Types: "CivilCases",
      Account: "india",
      Contacts: "9124543218",
    },
    {
      id: 12,
      name: "Raju",
      Users: 28,
      Status: "Goa",
      Priority: "telugu",
      Types: "CivilCases",
      Account: "india",
      Contacts: "91294434218",
    },
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data using GET method
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // console.log(data);

  const navigate = useNavigate();
  const handleFormSubmit1 = (formData) => {
    setInitialData((prevDataArray) => [...prevDataArray, formData]);
  };

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (editedData) => {
    const updatedData = [...initialData];
    updatedData[editIndex] = editedData;
    setInitialData(updatedData);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
    navigate("/Cases");
  };
  return (
    <div className="Home1">
      <Routes>
        <Route path="/" element={<SimpleTable1 />} />
        <Route
          path="/Cases/add-cases"
          element={
            <Addcases
              handleSubmit={handleFormSubmit1}
              initialData={initialData}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<TableComponent1 data={data} setData={setData} />}
        />

        <Route
          path="/Cases/Eidt"
          element={
            <Eidt
              rowData={initialData[editIndex]}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          }
        />

        <Route
          path="/Cases/*"
          element={
            <SimpleTable initialData={initialData} onEdit={handleEdit} />
          }
        />

        <Route path="/Account/*" element={<Account data={data} />} />
        <Route path="/Contacts/*" element={<Contacts data={data} />} />
        <Route path="/Opportunity/*" element={<Opportunity />} />
        <Route path="/Companies/*" element={<Companies />} />
      </Routes>
    </div>
  );
}

export default Home1;
