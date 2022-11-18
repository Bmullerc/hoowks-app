import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext();

export function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(localStorage.getItem("@hoowks:theme"))

  function changeTheme(theme) {
      setTheme(theme)
  }

  useEffect(() => {
    if (theme === themes.dark) {
      document.body.classList.add('dark')
      localStorage.setItem("@hoowks:theme", "dark")
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem("@hoowks:theme", "light")
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}