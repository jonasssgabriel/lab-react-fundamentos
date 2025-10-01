import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Tema atual: {theme}</h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          background: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
}
