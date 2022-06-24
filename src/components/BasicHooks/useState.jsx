import { Star, ThumbsDown, ThumbsUp } from 'phosphor-react';
import { useState } from 'react'
import { Code, HotTip, PreCode } from '../Snippets/RepeatedCode';

export function UseState() {
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleDislikes() {
    setDislikes(prevState => prevState + 1)
  }

  function handleLikes() {
    setLikes(prevState => prevState + 1)
  }

  function handleFavorite() {
    setFavorite(prevState => !prevState)
  }

  function handleAddClick() {
    setCount(prevState => prevState + 1)
  }

  function handleSubClick() {
    setCount(prevState => prevState - 1)
  }

  return (
    <article id="state" className='border-b-2 border-orange-300 my-20'>
      <h3 className="text-4xl font-bold mb-4">useState</h3>

      <p>Is a Hook that lets you add React state to function components. To start using it, we call the <Code content="useState" /> hook inside our component.</p>

      <PreCode
        code={`import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);`} />

      <h3 className="text-xl font-bold mt-12 mb-4">So, what does it do?</h3>
      <p>In a <Code content="useState" /> hook, we declare a "state variable", in this case <Code content="count" />, and use it to "preserve" some values between the function calls. Normally, variables "disappear" when the function exits, but state variables are preserved by React.</p>

      <PreCode code={`const [count, ...] = ...`} />

      <h3 className="text-xl font-bold mt-12 my-4">How do we use it?</h3>
      <p>We need to pass an argument that will be the initial state for our variable. In our example we gave the initial state the value of <Code content="0" /> to start our counter. It then returns a pair of values: the current state <Code content="count" />, and a function that updates it <Code content="setCount" />. This is why we wrote <Code content="const [count, setCount] = ... " />.</p>

      <PreCode code={`const [count, setCount] = useState(0)`} />

      <h3 className="text-3xl font-bold mt-20 mb-4">Reading State</h3>
      <p>When we want to display the current count in a function, we can use <Code content="count" /> directly: </p>

      <PreCode code={`<p>You clicked {count} times</p>`} />

      <h3 className="text-3xl font-bold mt-20 mb-4">Updating State</h3>
      <p>We use the function provided <Code content="setCount" /> to update the <Code content="count" /> variable:</p>

      <PreCode code={`<button onClick={() => setCount(prevState => prevState + 1)}>
    Click me
</button>`} />

      <p className='my-8'>In the example above, we used the <Code content="prevState" /> as an argument in the <Code content="setCount" /> function to make sure that React will update the new state based on the previous state value. We could also create a new function and call it on the onClick button event for clarity.</p>

      <PreCode
        code={`function handleAddClick() {
  setCount(prevState => prevState + 1)
}

<button onClick={handleAddClick}>
    Click me
</button>`} />

      <HotTip text={<p className="dark:text-zinc-700">When using functions inside of events like the one we showed above, be sure to not include the <Code content="()" /> after the function name to avoid a loop and possible headache trying to find the problem later.</p>} />

      <h3 className="text-3xl font-bold mt-20 mb-4">Recap</h3>
      <p className='font-medium'>Let's check what we learned so far line by line: </p>

      <PreCode
        code={` 1:  import { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:  function handleAddClick() {
 7:    setCount(prevState => prevState + 1)
 8:  }
 9:
10:  return (
11:    <div>
12:       <p>You clicked {count} times</p>
13:       <button onClick={handleAddClick}>
14:         Click me
15:       </button>
16:    </div>
17:   );
18:  }`} />

      <ul className='list-disc list-inside flex flex-col gap-2'>
        <li><strong>Line 1:</strong> We import the <Code content="useState" /> Hook from React. It lets us keep local state in a function component.</li>

        <li><strong>Line 4:</strong> Inside the Example component, we declare a new state variable by calling the <Code content="useState" /> Hook. It returns a pair of values, to which we give names. We're calling our variable <Code content="count" /> because it holds the number of button clicks. We initialize it to zero by passing <Code content="0" /> as the only <Code content="useState" /> argument. The second returned item is itself a function. It lets us update the <Code content="count" /> so we'll name it <Code content="setCount" />.</li>

        <li><strong>Line 6:</strong> This is where we create the <Code content="handleAddClick" /> function to put inside our button click event. We use the previous state <Code content="prevState" /> as an argument for the <Code content="setCount" /> function to make sure React uses the previous state value to update our variable.</li>

        <li><strong>Line 12:</strong> When the user clicks the button, we call our <Code content="handleAddClick" /> function into action. React will then re-render the Example component, passing the new <Code content="count" /> value to it.</li>
      </ul>

      <h3 className="text-3xl font-bold mt-20">Some examples of what we learned:</h3>
  
      <div className='flex flex-col md:flex-row lg:flex-row gap-4 mt-12'>
        <button
          onClick={() => setCount(0)}
          className="dark:bg-orange-600 dark:text-zinc-50 text-orange-400 hover:bg-orange-500 hover:text-zinc-100 bg-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-orange-400 py-1 px-4 rounded-md">
          Reset
        </button>
        <p className='bg-zinc-300 dark:bg-zinc-900 dark:text-zinc100 lg:w-fit text-center rounded-md px-4 py-1'>You clicked <span className='font-bold text-lg'>{count}</span> times</p>

        <button
          onClick={handleAddClick}
          className="dark:bg-orange-600 dark:text-zinc-50 text-orange-400 hover:bg-orange-500 hover:text-zinc-100 bg-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-orange-400 py-1 px-4 rounded-md">
          Add
        </button>
        <button
          onClick={handleSubClick}
          className="dark:bg-orange-600 dark:text-zinc-50 text-orange-400 hover:bg-orange-500 hover:text-zinc-100 bg-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-orange-400 py-1 px-4 rounded-md">
          Sub
        </button>
      </div>

      <PreCode
      code={`function ExampleCounter() {
  const [count, setCount] = useState(0);

  function handleAddClick() {
    setCount(prevState => prevState + 1)
  }

  function handleSubClick() {
    setCount(prevState => prevState - 1)
  }

  return (
    <div>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <p>You clicked <strong>{count}</strong> times</p>

        <button onClick={handleAddClick}>
          Add
        </button>
        <button onClick={handleSubClick}>
          Sub
        </button>
    </div>
  )
}`} />

      <div className='flex flex-col md:flex-row lg:flex-row gap-4 mt-12'>
        {favorite ? <Star size={40} weight="fill" className="text-orange-600" /> : <Star size={40} className="text-orange-600" />}
        <button
          onClick={handleFavorite}
          className="dark:bg-orange-600 dark:text-zinc-50 text-orange-400 hover:bg-orange-500 hover:text-zinc-100 bg-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-orange-400 py-1 px-4 rounded-md w-32">
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>

      <PreCode
      code={`function ExampleFavorite() {
  const favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(prevState => !prevState)
  }

  return (
    <div>
        {favorite ? <Star weight="fill" /> : <Star />}
      <button onClick={handleFavorite}>
        {favorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  )
}`} />

      <div className='flex flex-col md:flex-row lg:flex-row gap-4 mt-12 items-center'>
        <button onClick={handleLikes}>
          {(likes === 0) ? <ThumbsUp size={40} /> : <ThumbsUp size={40} weight="fill" />}
          {likes}
        </button>

        <button onClick={handleDislikes}>
          {(dislikes === 0) ? <ThumbsDown size={40} /> : <ThumbsDown size={40} weight="fill" />}
          {dislikes}
        </button>

        <button
          onClick={() => { setLikes(0), setDislikes(0) }}
          className="dark:bg-orange-600 dark:text-zinc-50 text-orange-400 hover:bg-orange-500 hover:text-zinc-100 bg-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-orange-400 py-1 px-4 rounded-md h-10">
          Reset
        </button>
      </div>

      <PreCode
      code={`function ExampleLikes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleDislikes() {
    setDislikes(prevState => prevState + 1)
  }

  function handleLikes() {
    setLikes(prevState => prevState + 1)
  }

  return (
    <div>
        <button onClick={handleLikes}>
          {(likes === 0) ? <ThumbsUp /> : <ThumbsUp weight="fill" />}
          {likes}
        </button>

        <button onClick={handleDislikes}>
          {(dislikes === 0) ? <ThumbsDown /> : <ThumbsDown weight="fill" />}
          {dislikes}
        </button>

        <button onClick={() => { setLikes(0), setDislikes(0) }}>
          Reset
        </button>
    </div>
  )
}`} />

      <p className='text-xs inline-block mt-8 mb-20'>For more, check the <a href="https://reactjs.org/docs/hooks-state.html" className=" hover:text-orange-500">Official Docs</a></p>
    </article>
  )
}

