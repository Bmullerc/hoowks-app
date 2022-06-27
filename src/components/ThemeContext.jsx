import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});

export function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}