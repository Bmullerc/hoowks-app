import { Menu, Transition } from "@headlessui/react"
import { Fragment } from 'react'
import { CaretDown, PhoneOutgoing, IdentificationCard, NoteBlank, MagnifyingGlassMinus, Swap } from 'phosphor-react'


export function InterHooksDropmenu() {
  return (
    <Menu>
      <Menu.Button
        className="inline-flex items-center w-full h-10 justify-center hover:cursor-pointer hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in"
      >
        <a href="/interhooks/" className="whitespace-nowrap">Intermediate Hooks</a>
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
          className="flex flex-col mt-0 w-52 origin-center md:origin-top-right dark:bg-zinc-800 bg-zinc-50 divide-y divide-gray-100 rounded-md border-none outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/interhooks/#callback"
              >
                <PhoneOutgoing
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}         
                />
                useCallback
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/interhooks/#id"
              >
                <IdentificationCard
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useId
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/interhooks/#usememo"
              >
                <NoteBlank
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useMemo
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/interhooks/#reducer"
              >
                <MagnifyingGlassMinus
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useReducer
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? 'bg-orange-500 text-zinc-50 rounded-sm inline-flex items-center h-8 transition-colors duration-75 ease-out hover:ease-in' : 'inline-flex items-center h-8'}`}
                href="/interhooks/#ref"
              >
                <Swap
                  weight="bold"
                  className={`${active ? 'inline-block h-4 w-4 mr-3 ml-2 text-orange-800 transition-colors duration-150 ease-out hover:ease-in' : 'inline-block h-4 w-4 mr-3 ml-2 text-orange-500'}`}
                />
                useRef
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>


  )
}

