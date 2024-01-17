import React, { useState } from "react";

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar__item dropdown dropdown--hoverable dropdown--right">
      <a
        href="#"
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : "false"}
        role="button"
        className="navbar__link"
        onClick={toggleMenu}
      >
        Development
      </a>
      {isMenuOpen && (
        <ul className="dropdown__menu">
          <li>
            <a>Guides</a>
          </li>
        </ul>
      )}
      <p>hhh</p>
    </div>
  );
};

export default DropdownMenu;
