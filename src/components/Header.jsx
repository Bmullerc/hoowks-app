export function Header() {
  return (
    <header id="header" className="flex justify-center items-center h-screen dark:bg-zinc-700 text-zinc-700 bg-zinc-200 tracking-tight dark:bg-gradient-to-b from-current to-orange-400 bg-gradient-to-t">
      <div className="text-center text-zinc-800">
        <h1 className="lg:text-8xl text-7xl font-bold">?</h1>
        <h1 className="lg:text-7xl text-6xl font-bold">
          React<br></br>
          <span className="text-orange-400 py-1 tracking-wider uppercase lg:text-8xl text-7xl inline-block hover:scale-125 lg:hover:-translate-x-6 transition-all duration-200 drop-shadow-lg">
            Hooks
          </span> <span className=" lg:text-4xl text-3xl">and</span>
          <span className="text-orange-300 pl-4 tracking-tighter uppercase lg:text-6xl text-6xl inline-block hover:scale-125 transition-all hover:translate-x-4 duration-200 drop-shadow-md">
            How
          </span>
        </h1>
        <h2 className="lg:text-5xl text-4xl font-bold">to
          <span className="inline-block px-4 py-1 text-orange-200 tracking-wider font-bold uppercase lg:text-6xl text-5xl transition-all duration-200 hover:scale-125 hover:translate-y-2 ease-in-out drop-shadow-md">
            Use
          </span>
          them.
        </h2>
        <h4 className="mt-2 font-normal text-orange-100 drop-shadow-sm tracking-wide">A more practical approach</h4>
      </div>
    </header>
  )
}