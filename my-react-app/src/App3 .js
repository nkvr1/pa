import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";

import Data from "./Data";

const App3 = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (!!localStorage.getItem("name") || !!localStorage.getItem("password")) {
      setToken(true);
    } else {
      setToken(false);
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }
  }, []);

  const handleDataFromChild = (data) => {
    if (!!localStorage.getItem("name") || !!localStorage.getItem("password")) {
      setToken(true);
    } else {
      setToken(data);
    }
  };

  return (
    <Router>
      <Routes>
        {token ? (
          <Route
            path="/*"
            element={<Data onDataFromChild={handleDataFromChild} />}
          />
        ) : (
          <Route path="/*" element={<LoginForm setToken={setToken} />} />
        )}
        {/* <Route path="/*" element={token ?<Data setToken={setToken} /> :<LoginForm setToken={setToken} />} /> */}
      </Routes>
    </Router>
  );
};

export default App3;
