import React, { useContext } from "react";
import ThemeContext from "./Ques4";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <nav className={theme}>
      <h1>Mon Site</h1>
      <button onClick={toggleTheme}>Changer le thème</button>
    </nav>
  );
}

export default Navbar;
