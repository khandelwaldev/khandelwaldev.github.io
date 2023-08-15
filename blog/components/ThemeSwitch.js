import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    } else {
      setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="themeSwitch">
      <button onClick={handleThemeToggle} className="toggleButton">
        {isDarkTheme ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
