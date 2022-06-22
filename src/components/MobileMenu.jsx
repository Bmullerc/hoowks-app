import { Menu } from "@headlessui/react"
import { MenuIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useState } from "react";
import { ThemeContext, themes } from "../theme/ThemeContext";
import { DropdownMenu } from "./DropdownMenu"

export function MobileMenu() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Menu as="nav" className="fixed right-4 top-4 z-10">
      <Menu.Button className="dark:text-zinc-900 dark:bg-orange-400 text-orange-100 bg-zinc-900">
        <MenuIcon
          className="h-10 w-10" />
      </Menu.Button>
      <Menu.Items
        className="text-lg flex-col h-fit w-80 rounded-xl absolute top-16 right-0 items-center py-2 px-4 lg:py-2 lg:px-8 dark:bg-zinc-800 dark:text-zinc-50 text-zinc-700 bg-zinc-50 shadow-sm"
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          <a
            href="#home"
            className="text-3xl font-extrabold hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in">
            Hoowks
          </a>
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
          
        </ul>
      </Menu.Items>
    </Menu>
  )
}