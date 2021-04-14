import React, { useState, useEffect } from "react";

const Header = ({ mode }) => {
  const [theme, setTheme] = useState("bg-primary");
  useEffect(() => {
    mode ? setTheme("bg-dark") : setTheme("bg-primary");
  }, [mode]);
  return (
    <nav className={`navbar navbar-dark ${theme} text-white  mb-5`}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <h2>Home</h2>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
