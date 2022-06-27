import { Code } from "./Snippets/RepeatedCode";

export function Intro() {
  return (
    <section className="border-b-2 border-zinc-300 mb-20">
      <h2 id="intro" className="lg:text-5xl text-4xl font-bold">What are Hooks in React anyway?</h2>
      <ul className="mt-12">
        <li><strong className="text-orange-500">Hooks</strong> let you use React features without writing a class. </li>
        <li><strong className="text-orange-500">Hooks</strong> are functions that let you “hook into” React state and lifecycle features from function components. </li>
        <li><strong className="text-orange-500">Hooks</strong> allow you to reuse stateful logic without changing your component hierarchy.</li>
        <li><strong className="text-orange-500">Hooks</strong> let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).</li>
        <li><strong className="text-orange-500">Hooks</strong> work side-by-side with existing code so you can adopt them gradually.</li>
      </ul>
      <p className="mt-10 text-sm">You can read more in-depth information in the official documentation, <a href="https://reactjs.org/docs/hooks-intro.html" className="font-medium hover:text-orange-500">Hooks Intro</a></p>


      <h2 id="intro" className="lg:text-4xl text-3xl font-bold mt-16">Hook Rules</h2>
      <h3 id="intro" className="lg:text-2xl text-xl font-bold mt-12">Only Call Hooks at the Top Level</h3>
      <p className="mt-4"><strong className="text-orange-500">Don't call Hooks inside loops, conditions, or nested functions.</strong> Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That's what allows React to correctly preserve the state of Hooks between multiple <Code content="useState" /> and <Code content="useEffect" /> calls. </p>

      <h3 id="intro" className="lg:text-2xl text-xl font-bold mt-12">Only Call Hooks from React Functions</h3>
      <p className="mt-6"><strong className="text-orange-500">Don't call Hooks from regular JavaScript functions.</strong> Instead, you can:</p>

      <ul className="list-disc list-inside">
        <li>Call Hooks from React function components.</li>
        <li>Call Hooks from custom Hooks</li>
      </ul>
      <p className="mt-4">By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.
      </p>

      <h3 id="intro" className="lg:text-2xl text-xl font-bold mt-12">Hooks cannot be conditional</h3>
      <p className="mt-4 mb-20"><strong className="text-orange-500">Every Hook is initially added into a list that is reviewed on every render cycle</strong>. So if the Hooks don't add up, there is something amiss and any linter set up correctly will warn you.</p>

    </section >
  )
}