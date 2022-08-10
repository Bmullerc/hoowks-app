import { UseEffect } from "../components/BasicHooks/useEffect";
import { UseState } from "../components/BasicHooks/useState";
import { UseContext } from "../components/BasicHooks/useContext";

export function BasicHooks() {
  return (
    <section className="text-left dark:bg-zinc-700 dark:text-zinc-200 text-zinc-700 bg-zinc-200 py-24 px-4 md:px-16 lg:px-52 2xl:px-72">
      <h2 className="lg:text-5xl text-4xl font-bold border-l-8 w-fit px-4 border-orange-500">The Basic Hooks</h2>
      <h4 className="text-sm">Learn them, you gonna need them <span>(for real)</span>.</h4>
      <UseState />
      <UseEffect />
      <UseContext />
    
    </section>
  )
}