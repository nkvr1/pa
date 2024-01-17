import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "./App.css";
import { SidebarData } from "./SidebarData";
function Sidebar() {
  return (
    <div className="Sidebar">
      <List>
        {SidebarData.map((val) => (
          <NavLink key={val.link} to={val.link} className="nav-link">
            {({ isActive }) => (
              <div
                style={
                  isActive
                    ? { display: "flex", backgroundColor: "#b8c7f2" }
                    : { display: "flex", Color: "white" }
                }
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      window.location.pathname = val.link;
                    }}
                  >
                    <ListItemIcon>{val.icon}</ListItemIcon>
                    <ListItemText primary={val.title} />
                  </ListItemButton>
                </ListItem>
              </div>
            )}
          </NavLink>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
