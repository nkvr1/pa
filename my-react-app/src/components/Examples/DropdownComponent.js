import React, { useState } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [dropdownItems, setDropdownItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    // Add more items as needed
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "A-Z" ? "Z-A" : "A-Z";
    setSortOrder(newSortOrder);

    const sortedItems = [...dropdownItems];
    if (newSortOrder === "A-Z") {
      sortedItems.sort((a, b) => a.localeCompare(b));
    } else {
      sortedItems.sort((a, b) => b.localeCompare(a));
    }
    setDropdownItems(sortedItems);
  };

  return (
    <div className="custom-dropdown">
      <button onClick={toggleDropdown}>
        {isOpen ? "Hide Dropdown" : "Show Dropdown"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={toggleSortOrder}>
            Toggle Sort Order ({sortOrder})
          </button>
          <ul>
            {dropdownItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
