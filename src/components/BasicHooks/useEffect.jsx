import { useState, useEffect } from 'react'
import { Code, HotTip, PreCode } from '../Snippets/RepeatedCode'

export function UseEffect() {
  const [count, setCount] = useState(0);
  const [windowWidthSize, setWindowWidthSize] = useState(0);
  const [windowHeightSize , setWindowHeightSize] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 5000);

    return () => clearTimeout(timer)
  }, [count]);

  useEffect(() => {
    function handleResize() {
      const { width, height } = document.body.getBoundingClientRect();

      setWindowWidthSize(Math.ceil(width));
      setWindowHeightSize(Math.ceil(height));
    }

    window.addEventListener('scroll', handleResize);

    return () => window.removeEventListener('scroll', handleResize);
  }, []);

  return (
    <article id="effect" className='border-b-2 border-orange-300 my-20'>
      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">2●</span>useEffect</h3>

      <p>The Effect Hook lets you perform side effects in function components. It accepts two arguments, the first is a function and the second argument is a dependency, which is optional.</p>

      <PreCode children={`useEffect(<function>, <dependency>)`} />

      <p>Let's use a timer as an example, we'll use <Code children="setTimeout()" /> to count 1 second after initial render:</p>

      <PreCode
        children={`import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}`} />

      <p>This snippet is based on the counter example from <a href="#state"><Code children="useState" /></a> <span className='text-sm'>(click if you need a refresher)</span>. But now, by using the <Code children="useEffect" /> Hook and passing the first argument <Code children="setTimeout" />, it will run after one second and then the <Code children="setCount" /> function will add one to our <Code children="count" /> as we've seen previously.</p>

      <HotTip
        children={<p className="dark:text-zinc-700">Careful! The example above keeps counting even though it should only count once, but since the Effect Hook runs on every render, this means that when the <Code children="count" /> changes, a render happens, which then triggers another effect. We should always include the second parameter which accepts an array. We can optionally pass dependencies to <Code children="useEffect" /> in this array. Check more <a href="#effect-dependency" className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>}
      >
      </HotTip>

      <h3 className="text-xl font-bold mt-12 my-4">But what are side effects?</h3>
      <p>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. There are two common kinds of side effects in React components: those that don't require cleanup, and those that do, we'll talk more about it below.</p>

      <p className='mt-4'>Now, we've already seen this example, but let's take a closer look at it:</p>

      <PreCode
        children={`import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}`} />

      <h3 className="text-xl font-bold mb-4 mt-12">So, what does it do?</h3>
      <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we call our first argument <Code children="setTimeout" /> to update our <Code children="count" /> after the given amount of time. But we could also perform data fetching or call some other imperative API.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Why is it called inside the component like that?</h3>
      <p>Placing <Code children="useEffect" /> inside the component lets us access the <Code children="count" /> state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>

      <h3 className="text-3xl font-bold mt-20 mb-4" id="effect-dependency">Passing a Dependency, and why?</h3>
      <p>If we have no dependencies, our Hook will keep triggering with every render, creating a loop. To avoid this, we can simply pass an optional dependency on the second parameter of the <Code children="useEffect" />, see the examples below: </p>

      <PreCode
        children={`useEffect(() => {
  //Runs on every render
});`} />

      <PreCode
        children={`useEffect(() => {
  //Runs only on the first render
}, []);`} />

      <PreCode
        children={`useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);`} />

      <p>So, to fix this issue, let's only run this effect on the initial render.</p>

      <PreCode
        children={`import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}`} />

      <HotTip
        children={<p className="dark:text-zinc-700">If <Code children="React.StrictMode" /> is on, components will render twice (on dev but not production) in order to detect any problems with your code and warn you about them, which can be very useful during development. In this case this would run our <Code children="useEffect" /> twice resulting in a initial <Code children="count" /> of two, even with our dependency array like shown above.</p>}
      />

      <h3 className="text-3xl font-bold mt-20 mb-4">Effects Without Cleanup</h3>

      <p>Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don't require a cleanup. We say that because we can run them and immediately forget about them.</p>

      <h3 className="text-3xl font-bold mt-20 mb-4">Effects that Require Cleanup</h3>

      <p>As seen above, some side effects don't require any cleanup. However, some effects do. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don't introduce a memory leak! We do this by including a return function at the end of the <Code children="useEffect" /> Hook, like in this example:</p>

      <PreCode
        children={`import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount(prevState => prevState + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}`} />

      <h3 className="text-xl font-bold mt-12 mb-4">Why did we return a function from our effect?</h3>
      <p>This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They're part of the same effect!</p>

      <PreCode children={`return () => clearTimeout(timer)`} />

      <h3 className="text-xl font-bold mt-12 mb-4">When exactly does React clean up an effect?</h3>
      <p>React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.</p>

      <HotTip
        children={<p className="dark:text-zinc-700">Unmounting is a phase in the lifecycle when a component is removed from the DOM, or unmounted as React likes to call it. We talk more about it <a href='/extra/#lifecycle' className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>}
      />

      <h3 className="text-3xl font-bold mt-20 mb-4" id="effect-dependency">Using Async and Await</h3>
      <p>The Effect Hook does NOT allow you to add <Code children="async" /> in the callback function. React is expecting a regular function and not a promise. But if you'd like to use <Code children="async/await" /> you can move your code into its own function, and invoke it inside <Code children="useEffect" />.</p>

      <PreCode
        children={`async function fetchApi() {
  try {
    const response = await fetch('url/api');
    const { data } = await response.json();
  } catch(e) {
    console.error(e);
  }
}

React.useEffect(() => {
  fetchApi();
}, []);`} />

      <h3 className="text-3xl font-bold mt-20">Some examples of what we learned:</h3>

      <p className='mt-12'><span className='text-4xl'>{count}</span> -&gt; Every 5 seconds, I increase by one.</p>

      <PreCode
        children={`function ExampleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 5000);

    return () => clearTimeout(timer)
  }, [count]);

  return <p><strong>{count}</strong> -&gt; Every 5 seconds, 
  I increase by one.</p>
}`} />

      <p className='mt-12'>This page is <span className='text-4xl'>{windowWidthSize}</span> pixels long and <span className='text-4xl'>{windowHeightSize}</span> pixels high.</p>

      <PreCode
        children={`function ExampleWindowSize() {
  const [windowWidthSize, setWindowWidthSize] = useState(0);
  const [windowHeightSize , setWindowHeightSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      const { width, height } = document.body.getBoundingClientRect();

      setWindowWidthSize(Math.ceil(width));
      setWindowHeightSize(Math.ceil(height));
    }

    window.addEventListener('scroll', handleResize);

    return () => window.removeEventListener('scroll', handleResize);
  }, []);

  return <p>This page is <strong>{windowWidthSize}</strong> pixels long and 
  <strong>{windowHeightSize}</strong> pixels high.</p>
}`} />

      <p className="text-xs inline-block mt-8 mb-20">For more, check the <a href="https://reactjs.org/docs/hooks-effect.html" className="hover:text-orange-500">Official Docs</a>.</p>



    </article>
  )


}

