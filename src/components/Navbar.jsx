import { Menu } from "@headlessui/react";
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
import { ThemeContext, themes } from '../theme/ThemeContext';


export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Menu
      as="nav"
      className="flex fixed w-screen justify-between items-center py-2 px-4 2xl:px-72 lg:px-52 dark:bg-zinc-800 dark:text-zinc-50 text-zinc-700 bg-zinc-50 shadow-sm z-10"
    >
      <a
        href="#header"
        className="text-lg font-bold hover:text-orange-500 dark:text-zinc-50 hover:dark:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
        Hoowks
      </a>
      <ul className="flex flex-row gap-6">

        

        <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
          <a href="#intro">Intro</a>
        </li>
        <DropdownMenu />
        <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
          <a href="#extra">Extra</a>
        </li>
        <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              darkMode
                ?
                <SunIcon
                  className="h-6 w-6 text-orange-500 hover:text-zinc-50 hover:cursor-pointer -ml-3 transition-all duration-150 ease-out hover:ease-in hover:-rotate-90 inline-block"
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(themes.light)
                  }}
                />
                :
                <MoonIcon
                  className="h-5 w-6 text-orange-500 hover:text-zinc-800 hover:cursor-pointer -ml-3 transition-all duration-300 ease-out hover:ease-in -rotate-90 hover:rotate-3 inline-block"
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(themes.dark)
                  }}
                />)}
          </ThemeContext.Consumer>
        </li>
      </ul>
    </Menu >
  )
}