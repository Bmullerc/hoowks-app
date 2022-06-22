export function LifeCycles() {
  return (
    <article className="mt-20 pb-10 border-b-2 border-zinc-300">
      <h3 className="text-3xl font-bold mt-20 mb-4" id="lifecycle">Lifecycles inside React</h3>
      <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: <strong>Mounting</strong>, <strong>Updating</strong>, and <strong>Unmounting</strong>. Each one of these phases has React methods that get called to perform various things, we won't get further into them, but you can check them out <a href="https://www.w3schools.com/react/react_lifecycle.asp" className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>

      <ul className="list-disc list-inside flex flex-col gap-4 mt-4">
        <li><strong>Mounting:</strong> Means putting elements into the DOM. It has four built-in methods that gets called, in this order, when mounting a component:
          <ol className='list-decimal list-inside py-2 px-4'>
            <li>constructor()</li>
            <li>getDerivedStateFromProps()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
          </ol>
        </li>

        <li><strong>Updating:</strong> A component is updated whenever there is a change in the component's state or props. It has five built-in methods that gets called, in this order, when a component is updated:
          <ol className='list-decimal list-inside py-2 px-4'>
            <li>getDerivedStateFromProps()</li>
            <li>shouldComponentUpdate()</li>
            <li>render()</li>
            <li>getSnapshotBeforeUpdate()</li>
            <li>componentDidUpdate()</li>
          </ol>
        </li>

        <li><strong>Unmounting:</strong> When a component is removed from the DOM. It has only one built-in method that gets called when a component is unmounted:
          <ul className='list-decimal list-inside py-2 px-4'>
            <li>componentWillUnmount()</li>
          </ul>
        </li>
      </ul>
    </article>
  )
}