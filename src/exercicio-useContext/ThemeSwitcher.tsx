import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Tema atual: {theme}</h2>
      <button onClick={toggleTheme} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Alternar Tema
      </button>
    </div>
  );
}