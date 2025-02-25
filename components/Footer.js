import { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark-mode", savedTheme === "dark");
    } else {
      setDarkMode(systemPrefersDark);
      document.body.classList.toggle("dark-mode", systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Nords Event Communications</p>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </footer>
  );
}
