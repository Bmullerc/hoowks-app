import { Fragment } from 'react'
import { Menu, Popover, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

import { BasicHooksDropmenu } from "./BasicHooksDropmenu";
import { InterHooksDropmenu } from "./InterHooksDropmenu";

export function ConsolidatedDropdown() {
  return (
    <Popover>
      <Popover.Button
        className="inline-flex items-center py-1 w-full justify-center hover:cursor-pointer hover:text-orange-500 transition-all duration-150 ease-out hover:ease-in border-b-2 border-transparent hover:border-orange-500 active:border-orange-500 active:ease-in active:text-orange-500"
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
        <Popover.Panel className="lg:absolute flex flex-col divide-y-2 divide-orange-300 justify-center right-14 md:right-32 2xl:right-[400px] lg:right-80 top-56 md:top-8 mt-2 w-52 h-fit origin-center md:origin-top-right dark:bg-zinc-800 bg-zinc-50 rounded-md border-none outline-none shadow-sm">
          <BasicHooksDropmenu />
          <InterHooksDropmenu />
        </Popover.Panel>
      </Transition>

    </Popover>
  )
}