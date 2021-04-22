import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Header = ({ name, mode, setMode }) => {
  const [theme, setTheme] = useState("bg-primary");
  useEffect(() => {
    mode ? setTheme("bg-dark") : setTheme("bg-primary");
  }, [mode]);
  return (
    <nav className={`navbar navbar-dark ${theme} text-white  mb-5 p-3`}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <h3>{name}</h3>
        </li>
      </ul>
      <Button
        className="font-weight-bold"
        color={!mode ? "info" : "secondary"}
        onClick={() => setMode(!mode)}
      >
        {!mode ? "Dark" : "Light"}
      </Button>
    </nav>
  );
};

export default Header;
