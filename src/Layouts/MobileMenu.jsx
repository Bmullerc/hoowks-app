import { Menu } from "@headlessui/react"
import { Sun, Moon, List } from 'phosphor-react'
import { useState } from "react";
import { ThemeContext, themes } from "../components/ThemeContext";
import Logo from "../img/Hoowks.png"
import OrangeLogo from '../img/Hoowks-orange.png'
import WhiteLogo from '../img/Hoowks-white.png'
import { ConsolidatedDropdown } from "./ConsolidatedDropdown";

export function MobileMenu() {
  const theme = localStorage.getItem("theme")
  const isDark = (theme === "dark")

  const [darkMode, setDarkMode] = useState(isDark);

  return (
    <Menu as="nav" className="fixed right-4 top-4 z-10">
      <Menu.Button className="dark:text-zinc-900 dark:bg-orange-400 text-orange-100 bg-zinc-900 rounded-md">
        <List
          weight="bold"
          size={46} />
      </Menu.Button>
      <Menu.Items
        className="text-lg flex-col h-fit w-80 rounded-xl absolute top-16 right-0 items-center py-2 px-4 lg:py-2 lg:px-8 dark:bg-zinc-800 dark:text-zinc-50 text-zinc-700 bg-zinc-50 shadow-sm"
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          <a
            href="/#header"
            className="flex justify-center items-center gap-2 text-3xl font-extrabold hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            Hoowks

            <ThemeContext.Consumer>
              {() => (
                darkMode
                  ?
                  <img
                    src={OrangeLogo}
                    alt="Hoowks Logo, a mix of a hook and an question mark"
                    onMouseOver={e => e.currentTarget.src = WhiteLogo}
                    onMouseOut={e => e.currentTarget.src = OrangeLogo}
                    className="inline-block h-7 hover:scale-110 hover:-translate-y-1 duration-300" />
                  :
                  <img
                    src={OrangeLogo}
                    alt="Hoowks Logo, a mix of a hook and an question mark"
                    onMouseOver={e => e.currentTarget.src = Logo}
                    onMouseOut={e => e.currentTarget.src = OrangeLogo}
                    className="inline-block h-7 hover:scale-110 hover:-translate-y-1 duration-300" />
              )}
            </ThemeContext.Consumer>

          </a>
          <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            <a href="/#intro">Intro</a>
          </li>
          <ConsolidatedDropdown />
          <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            <a href="/extra">Extra</a>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            <a href="#contact">Contact</a>
          </li>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              darkMode
                ?
                <Sun
                  weight="fill"
                  className="h-6 w-6 text-zinc-50 hover:cursor-pointer -ml-3 transition-all duration-150 ease-out hover:ease-in hover:-rotate-90 inline-block"
                  onClick={() => {
                    setDarkMode(false);
                    changeTheme(themes.light)
                  }}
                />
                :
                <Moon
                  weight="fill"
                  className="h-5 w-6 text-zinc-800 hover:cursor-pointer -ml-3 transition-all duration-300 ease-out hover:ease-in -rotate-90 hover:rotate-3 inline-block"
                  onClick={() => {
                    setDarkMode(true);
                    changeTheme(themes.dark)
                  }}
                />)}
          </ThemeContext.Consumer>

        </ul>
      </Menu.Items>
    </Menu>
  )
}