import React, { useState } from "react";
import { ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";
import { Button, Popover, MenuItem, ListItemText } from "@mui/material";

const SortableList = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Banana", "Mango"]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (order) => {
    const sortedItems =
      order === "asc" ? items.slice().sort() : items.slice().sort().reverse();
    setItems(sortedItems);
    setSortOrder(order);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "sort-popover" : undefined;

  return (
    <div>
      <Button onClick={handleClick} endIcon={<ArrowDownwardIcon />}>
        Sort
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleSort("asc")}>
          <ListItemText primary="A-Z" />
        </MenuItem>
        <MenuItem onClick={() => handleSort("desc")}>
          <ListItemText primary="Z-A" />
        </MenuItem>
      </Popover>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortableList;
