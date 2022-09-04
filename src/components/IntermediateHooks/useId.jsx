import { Code, HotTip, PreCode } from "../Snippets/RepeatedCode";

export function UseId() {
  return (
    <article id="id" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">2●</span>useId</h3>
      <PreCode code={`const id = useId();`} />

      <p>This hook is for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.</p>

      <p className="mt-4"><span className="font-bold">Important</span>, <Code content={"useId"} /> should <span className="font-bold">not</span> be used to generate keys in a list.</p>

      <HotTip text={<p className="dark:text-zinc-700">Hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML. Learn more about it <a href='/extra/#hydration' className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>} />

      <p className="mt-8">For a basic example, pass the id directly to the elements that need it:</p>

      <PreCode code={`function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like Potatoes?</label>
      <input id={id} type="checkbox" name="taters"/>
    </>
  );
};`} />

      <p className="mt-8">For multiple IDs in the same component, append a suffix using the same id:</p>

      <PreCode code={`function NameFields() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <div>
        <input id={id + '-firstName'} type="text" />
      </div>
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <div>
        <input id={id + '-lastName'} type="text" />
      </div>
    </div>
  );
}`} />

    </article>
  )
}