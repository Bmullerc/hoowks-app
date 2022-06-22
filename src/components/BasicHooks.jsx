import { UseEffect } from "./BasicHooks/useEffect";
import { UseState } from "./BasicHooks/useState";
import { UseContext } from "./BasicHooks/useContext";

export function BasicHooks() {
  return (
    <article className="">
      <h2 className="lg:text-5xl text-4xl font-bold">The Basic Hooks</h2>
      <h4 className="text-sm">Learn them, you gonna need them <span>(for real)</span>.</h4>
      <UseState />
      <UseEffect />
      <UseContext />
    
    </article>
  )
}