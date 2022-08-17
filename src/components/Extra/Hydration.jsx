import { Code, PreCode } from "../Snippets/RepeatedCode";

export function Hydration() {
  return (
    <article className="mt-20 pb-10 border-b-2 border-zinc-300">
      <h3 className="flex items-center text-3xl font-bold mt-20 mb-4" id="memo"><span className="text-lg text-orange-500 mx-1">●</span>Hydration</h3>
      <p>Hydration (or rehydration) is the name given to the process in JavaScript frameworks to initializing the page in the browser after it has previously been server rendered. To really understand the concept of hydration in React, first we need to understand a couple of terms:</p>

      <ul className="list-disc list-inside flex flex-col gap-4 mt-8">
        <li className="font-bold text-xl">ReactDOM
          <p className="text-base font-normal mt-4 pl-4">The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.</p>
        </li>
        <li className="font-bold text-xl">ReactDOMServer
          <p className="text-base font-normal mt-4 pl-4">The ReactDOMServer object enables you to render components to static markup. Typically, it's used on a Node server.</p>
        </li>
        <li className="font-bold text-xl">render() <span className="text-sm font-light">*considered legacy as of React 18</span>
          <p className="text-base font-normal mt-4 pl-4"> It returns a reference to the component after rendering a React element into the DOM in the provided container (or returns null for stateless components).</p>
        </li>
        <li className="font-bold text-xl">hydrate() <span className="text-sm font-light">*considered legacy as of React 18</span>
          <p className="text-base font-normal mt-4 pl-4">Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.</p>
        </li>
      </ul>

      <p className="mt-8">The React Hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML.</p>
    </article>
  )
}