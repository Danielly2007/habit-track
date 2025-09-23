// src/components/ThemeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  );
};

export default ThemeToggle;
