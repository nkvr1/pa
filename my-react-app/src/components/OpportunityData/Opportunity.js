import React from "react";
import { Provider } from "react-redux";
import store from "../../storeData/store";
import OpportunityEdit from "./OpportunityEdit";
import { Route, Routes } from "react-router-dom";
import OpportunityAdd from "./OpportunityAdd";
import OpportunityTable from "./OpportunityTable";

const Opportunity = () => {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/OpportunityEdit" element={<OpportunityEdit />} />
          <Route path="/OpportunityAdd" element={<OpportunityAdd />} />
          <Route path="/" element={<OpportunityTable />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default Opportunity;
