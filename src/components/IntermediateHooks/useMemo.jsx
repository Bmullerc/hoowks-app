import { Code, HotTip, PreCode } from "../Snippets/RepeatedCode";

export function UseMemo() {
  return (
    <article id="usememo" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">3●</span>useMemo</h3>
      
      <p>The <Code>useMemo</Code> hook returns a memoized value.</p>

      <HotTip children={<p className="dark:text-zinc-700">You can get a refresher in what <Code>memoization</Code> means <a href='/extra/#memo' className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>}/>

      <p className="mt-6">To use it, you would call it inside your component and pass in two arguments: a function that performs the expensive computation, and an array of values that the hook should watch for changes. When the component is rendered, the hook will call the provided function and cache its result. On subsequent renders, if none of the values in the watch array have changed, the hook will return the cached result instead of calling the function again.</p>

      <p className="mt-4">Here is an example of how you could use memoization in a React component to optimize performance:</p>

      <PreCode>
        {`import { useMemo } from 'react';

function MyComponent(props) {
  // Use the useMemo hook to memoize the expensiveComputation function
  const expensiveResult = useMemo(() => expensiveComputation(props.data), [props.data]);

  return (
    <div>
      {/* Use the memoized result of the expensive computation in the component */}
      <p>{expensiveResult}</p>
    </div>
  );
}
`}
      </PreCode>

      <p>In the example, the <Code>useMemo</Code> hook is called and passed two arguments: a function that performs an expensive computation on the <Code>props.data</Code> value, and an array containing <Code>props.data</Code> as the only value. When the component is rendered, the <Code>expensiveComputation</Code> function will be called and its result will be cached. On subsequent renders of the component, if the <Code>props.data</Code> value has not changed, the hook will return the cached result of the computation instead of calling the function again. This can help improve the performance of the component by avoiding unnecessary recalculations.</p>

    </article>
  )
}