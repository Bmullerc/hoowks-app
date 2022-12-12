import { Code, HotTip, PreCode } from "../Snippets/RepeatedCode";

export function UseCallback() {
  return (
    <article id="callback" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">1●</span>useCallback</h3>
      <p>The <Code>useCallback</Code> Hook returns a memoized callback function.</p>

      <PreCode>
        const cachedFunction = useCallback(function, dependencies)
      </PreCode>

      <HotTip children={<p className="dark:text-zinc-700">Think of <Code>memoization</Code> as caching a value so that it does not need to be recalculated. You can learn more about memoization <a href="/extra/#memo" className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>} />

      <p className="mt-4">This allows us to isolate resource intensive functions so that they will not automatically run on every render. The <Code>useCallback</Code> Hook only runs when one of its dependencies update. This can improve performance.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">What is it used for?</h3>

      <ul className="list-disc list-inside">
        <p className="font-medium mb-4">It has mainly four uses:</p>
        <li>Skipping re-rendering of components</li>
        <li>Updating state from a memoized callback</li>
        <li>Preventing an Effect from firing too often</li>
        <li>Optimizing a custom Hook</li>
      </ul>

      <h3 className="text-xl font-bold mt-12 mb-4">asd</h3>

      

      <HotTip children={<p classname="dark:text-zinc-700">The <Code>useCallback</Code> and <Code>useMemo</Code> Hooks are similar. The main difference is that <Code>useMemo</Code> returns a memoized value and <Code>useCallback</Code> returns a memoized function. You can learn more about <a href="#usememo" className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>} />

    </article>
  )
}