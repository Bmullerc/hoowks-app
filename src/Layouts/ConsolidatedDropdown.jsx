import { Fragment } from 'react'
import { Menu, Popover, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

import { BasicHooksDropmenu } from "./BasicHooksDropmenu";
import { InterHooksDropmenu } from "./InterHooksDropmenu";

export function ConsolidatedDropdown() {
  return (
    <Popover>
      <Popover.Button
        className="inline-flex items-center w-full justify-center hover:cursor-pointer hover:text-orange-500 transition-colors duration-150 ease-out hover:ease-in"
      >
        Content
        <CaretDown
          className="ml-1 -mr-1 h-5 w-5 text-orange-500 hover:text-orange-800 hover:dark:text-orange-100"
          aria-hidden="true"
          weight="fill"
        />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="lg:absolute flex flex-col justify-evenly gap-1 right-14 md:right-24 2xl:right-[400px] lg:right-80 top-56 md:top-8 mt-2 w-52 h-fit origin-center md:origin-top-right dark:bg-zinc-800 bg-zinc-50 rounded-md border-none outline-none shadow-sm">
          <BasicHooksDropmenu />
          <InterHooksDropmenu />
        </Popover.Panel>
      </Transition>

    </Popover>
  )
}