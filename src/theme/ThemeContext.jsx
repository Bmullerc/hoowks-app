import { createContext } from "react";

export const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});