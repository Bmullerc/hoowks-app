import { Menu, Transition } from "@headlessui/react"
import { Fragment } from 'react'
import { CaretDown, NotePencil, Code, Palette } from 'phosphor-react'


export function BasicHooksDropmenu() {
  return (
    <Menu>
      <Menu.Button
        className="inline-flex items-center w-full justify-center hover:cursor-pointer hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in"
      >
        <a href="/basichooks/">Basic Hooks</a>
        <CaretDown
          className="ml-1 -mr-1 h-5 w-5 text-orange-500 hover:text-orange-800 hover:dark:text-orange-100"
          aria-hidden="true"
          weight="fill"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="flex flex-col mt-0 w-52 origin-center md:origin-top-right dark:bg-zinc-800 bg-zinc-50 divide-y divide-gray-100 rounded-sm border-none outline-none z-50">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/basichooks/#state"
              >
                <NotePencil
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}         
                />
                useState
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/basichooks/#effect"
              >
                <Palette
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useEffect
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/basichooks/#context"
              >
                <Code
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useContext
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>


  )
}

