import { Code, PreCode } from "../Snippets/RepeatedCode";

export function Closure() {
  return (
    <article className="mt-20 pb-10 border-b-2 border-zinc-300">
      <h3 className="flex items-center text-3xl font-bold mt-20 mb-4" id="hydration"><span className="text-lg text-orange-500 mx-1">●</span>Closure</h3>
      <p>In React, a <Code>closure</Code> is a function that has access to variables in its parent scope, even after the parent function has returned. Closures can be used to create and maintain a consistent state between renders, allowing you to keep track of a component's state and props over time. They are often used in combination with event handlers to create dynamic and interactive user interfaces.</p>

      <PreCode>
        {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
`}
      </PreCode>

      <p>The increment and decrement functions are <Code>closures</Code> that have access to the <Code>count</Code> state variable and the <Code>setCount</Code> function defined by the useState hook. Each time the increment or decrement button is clicked, the corresponding function is called, which in turn calls <Code>setCount</Code> to update the <Code>count</Code> state and re-render the component.</p>

      <h3 className="text-xl font-bold mt-12 my-4">Why are we using prevCount instead of just count?</h3>

      <p>When we call <pre className="inline bg-zinc-300 rounded-md p-2 dark:bg-zinc-900 dark:text-zinc-300">{`setCount(prevCount => prevCount + 1)`}</pre> or <pre className="inline bg-zinc-300 rounded-md p-2 dark:bg-zinc-900 dark:text-zinc-300">{`setCount(prevCount => prevCount - 1)`}</pre> it is updating the state with a new value which is based on the previous state value.</p>

      <p className="mt-4">It's a way to ensure that you are working with the most recent state value. This is particularly important when your component is being rendered frequently and you don't want to accidentally overwrite a state update that was made by another render.</p>

    </article>


  )
}