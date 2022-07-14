import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext({
  changeTheme: () => { },
});

export function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  const savedTheme = localStorage.getItem("theme")
  console.log(savedTheme)


  function changeTheme(theme) {
      setTheme(theme)
  }

  useEffect(() => {
    if (theme === themes.dark) {
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}