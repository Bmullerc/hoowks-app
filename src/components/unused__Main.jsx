import { BasicHooks } from "../pages/BasicHooks";
import { Extra } from "../pages/Extra";
import { Intro } from "./Intro";

export function Main() {
  return (
    <main
      id="main"
      className="text-left dark:bg-zinc-700 dark:text-zinc-200 text-zinc-700 bg-zinc-200 py-24 px-4 md:px-16 lg:px-52 2xl:px-72"
    >
      <Intro />
      <BasicHooks />
      <Extra />
    </main>
  )
}