import { Code, PreCode } from "../Snippets/RepeatedCode";

export function UseRef() {
  return (
    <article id="ref" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">5●</span>useRef</h3>
      <PreCode code={`const refContainer = useRef(initialValue);`} />
      <p>The useRef Hook allows you to persist values between renders. </p>
      <p>It can be used to store a mutable value that does not cause a re-render when updated and can also be used to access a DOM element directly.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">How it works?</h3>
      <p><Code content="useRef" /> returns a mutable ref object whose <Code content=".current" /> property is initialized to the passed argument <Code content="(initualValue)" />. The returned object will persist for the full lifetime of the component.</p>

      <p className="mt-4">A common use case is to access a child imperatively, in general, we want to let React handle all DOM manipulation, but there are some instances where <Code content="useRef" /> can be used without causing issues.</p>

      <PreCode code={`function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // 'current' points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`} />

      <p>Essentially, <Code content="useRef" /> is like a “box” that can hold a mutable value in its <Code content=".current" /> property.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Tracking State Changes</h3>

      <p>The <Code content="useRef" /> Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>

      <PreCode code={`function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}`} />

      <p>We use a combination of <Code content="useState" />, <Code content="useEffect" />, and <Code content="useRef" /> to keep track of the previous state.

        In the <Code content="useEffect" />, we are updating the <Code content="useRef" /> current value each time the <Code content="inputValue" /> is updated by entering text into the input field.</p>

    </article>
  )
}