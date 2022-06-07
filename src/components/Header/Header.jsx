import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import "./styles.css";
const Header = () => {
  const root = document.querySelector(":root");
  const currentTheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? "light"
    : "dark";

  const [theme, setTheme] = useState(currentTheme);
  root.setAttribute("color-scheme", theme);
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    root.setAttribute("color-scheme", theme);
  };
  return (
    <header>
      <h3 className="logo">
        Almoujab <span style={{ color: "#0967ed" }}>+</span>
      </h3>
      <button onClick={switchTheme}>
        {theme === "dark" ? (
          <BsSun className="theme-icon" />
        ) : (
          <BsMoon className="theme-icon" />
        )}
      </button>
    </header>
  );
};

export default Header;
