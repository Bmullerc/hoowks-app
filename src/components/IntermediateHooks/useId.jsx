import { Code, PreCode } from "../Snippets/RepeatedCode";

export function UseId() {
  return (
    <article id="id" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">2●</span>useId</h3>
      <PreCode code={`const id = useId();`} />

      <p>This hook is for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.</p>

    </article>
  )
}