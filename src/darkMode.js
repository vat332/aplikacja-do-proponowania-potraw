import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialMode = savedMode ? JSON.parse(savedMode) : systemPrefersDark;
    setIsDark(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  return [isDark, toggle];
}
