import { Menu } from "@headlessui/react";
import { Sun, Moon } from 'phosphor-react'
import { useState } from "react";

import { ThemeContext, themes } from '../components/ThemeContext';
import { ConsolidatedDropdown } from "./ConsolidatedDropdown";

import Logo from '../img/Hoowks.png'
import OrangeLogo from '../img/Hoowks-orange.png'
import WhiteLogo from '../img/Hoowks-white.png'

export function Navbar() {
  const theme = localStorage.getItem("theme")
  const isDark = (theme === "dark")

  const [darkMode, setDarkMode] = useState(isDark);

  return (
    <Menu
      as="nav"
      className="flex fixed w-screen justify-between items-center py-2 px-4 2xl:px-72 lg:px-52 dark:bg-zinc-800 dark:text-zinc-50 text-zinc-700 bg-zinc-50 shadow-sm z-10"
    >
      <a
        href="/#header"
        className="text-xl flex justify-center items-center gap-2 font-bold hover:text-orange-500 dark:text-zinc-50 hover:dark:text-orange-500 transition-all duration-150 ease-out hover:ease-in">
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
                className="inline-block h-4 hover:scale-110 hover:-translate-y-1 duration-300" />
              :
              <img
                src={OrangeLogo}
                alt="Hoowks Logo, a mix of a hook and an question mark"
                onMouseOver={e => e.currentTarget.src = Logo}
                onMouseOut={e => e.currentTarget.src = OrangeLogo}
                className="inline-block h-4 hover:scale-110 hover:-translate-y-1 duration-300" />
          )}
        </ThemeContext.Consumer>

      </a>
      <ul className="flex flex-row justify-center items-center gap-6">

        <li className="hover:text-orange-500 py-1 transition-all duration-150 ease-out hover:ease-in border-b-2 border-transparent hover:border-orange-500">
          <a href="/#about">About</a>
        </li>
        <li className="hover:text-orange-500 py-1 transition-all duration-150 ease-out hover:ease-in border-b-2 border-transparent hover:border-orange-500">
          <a href="/#intro">Intro</a>
        </li>
        <ConsolidatedDropdown />
        <li className="hover:text-orange-500 py-1 transition-all duration-150 ease-out hover:ease-in border-b-2 border-transparent hover:border-orange-500">
          <a href="/extra">Extra</a>
        </li>
        <li className="hover:text-orange-500 py-1 transition-all duration-150 ease-out hover:ease-in border-b-2 border-transparent hover:border-orange-500">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:text-orange-500 py-1 transition-all duration-150 ease-out hover:ease-in">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              darkMode
                ?
                <Sun
                  className="h-5 w-5 text-zinc-50 hover:cursor-pointer -ml-3 transition-all duration-150 ease-out hover:ease-in hover:-rotate-90"
                  onClick={() => {
                    setDarkMode(false)
                    changeTheme(themes.light)
                  }}
                  weight="fill"
                />
                :
                <Moon
                  className="h-5 w-5 text-zinc-800 hover:cursor-pointer -ml-3 transition-all duration-300 ease-out hover:ease-in -rotate-90 hover:rotate-3"
                  onClick={() => {
                    setDarkMode(true);
                    changeTheme(themes.dark)
                  }}
                  weight="fill"
                />)}
          </ThemeContext.Consumer>
        </li>
      </ul>
    </Menu >
  )
}