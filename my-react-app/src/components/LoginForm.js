import React, { useState } from "react";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // useEffect(() => {

  //   if(localStorage.getItem("name") &&
  //   localStorage.getItem("password")){
  //     navigate('/');
  //   }
  // }, []);

  const handleLogin = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("Password", password);
    navigate("/");

    if (!!localStorage.getItem("name") || !!localStorage.getItem("password")) {
      setToken(true);
    } else {
      setToken(false);
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form>
        name:
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
