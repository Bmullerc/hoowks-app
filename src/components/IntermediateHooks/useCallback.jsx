import { Code, PreCode } from "../Snippets/RepeatedCode";

export function UseCallback() {
  return (
    <article id="callback" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">1●</span>useCallback</h3>
      <p className=""><Code>useCallback</Code> is a React Hook that lets you cache a function definition between re-renders.</p>

      <PreCode>
        const cachedFunction = useCallback(function, dependencies)
      </PreCode>

      <h3 className="text-xl font-bold mt-12 mb-4">What is it used for?</h3>


      <ul className="list-disc list-inside">
        <p className="font-medium mb-4">It has mainly four uses:</p>
        <li>Skipping re-rendering of components</li>
        <li>Updating state from a memoized callback</li>
        <li>Preventing an Effect from firing too often</li>
        <li>Optimizing a custom Hook</li>
      </ul>

      <h3 className="text-xl font-bold mt-12 mb-4">asd</h3>

    </article>
  )
}