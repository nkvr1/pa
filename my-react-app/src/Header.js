import "./App.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

import { Card } from "@mui/material";
function Header({ setToken }) {
  const navigate = useNavigate();
  const handlelogout = () => {
    setToken(false);
    localStorage.clear();
    navigate("/");
    console.log("akak");
  };
  return (
    <div className="header">
      <Card sx={{ width: "1550px" }}>
        Welcome &nbsp;&nbsp;
        <DensitySmallIcon sx={{ position: "relative", top: 5 }} />
        &nbsp;&nbsp; Cases
        <SettingsIcon
          onClick={handlelogout}
          sx={{ position: "relative", top: 5, left: 1300 }}
        />
      </Card>
    </div>
  );
}
export default Header;
