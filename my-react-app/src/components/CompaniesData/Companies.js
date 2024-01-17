import React from "react";
import { Provider } from "react-redux";
import store from "../../storeData/store";
import CompaniesTable from "./CompaniesTable";
import { Route, Routes } from "react-router-dom";
import CompaniesEdit from "./CompaniesEdit";
import CompaniesAdd from "./CompaniesAdd";

const Companies = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/CompaniesEdit" element={<CompaniesEdit />} />
        <Route path="/CompaniesAdd" element={<CompaniesAdd />} />
        <Route path="/" element={<CompaniesTable />} />
      </Routes>
    </Provider>
  );
};

export default Companies;
