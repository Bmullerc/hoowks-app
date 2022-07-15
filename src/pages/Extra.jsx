import { LifeCycles } from "../components/Extra/Lifecycles";

export function Extra() {
  return (
    <section className="text-left dark:bg-zinc-700 dark:text-zinc-200 text-zinc-700 bg-zinc-200 py-24 px-4 md:px-16 lg:px-52 2xl:px-72">
        <h3 className="text-5xl font-bold mb-4" id="extra">Some Extra Content</h3>
        <p className="text-sm">Might be useful, idk.</p>

        <LifeCycles />

        <h3 className="text-3xl font-bold mb-4 mt-12">TODO List</h3>
        <ul className="list-disc list-inside">
          <li className="text-xl font-bold underline">Intermediate Hooks</li>
          <li className="text-xl font-bold">Finalize Consolidated Content DropdownMenu</li>
          <li className="text-xl font-bold">Work on changes to the MobileMenu</li>
          <li className="text-xl font-bold">Extra Content about "Making Your Own Custom Hooks"</li>
          <li className="text-xl font-bold">Testing</li>
          <li className="text-xl font-bold line-through">React Router</li>
          <li className="text-xl font-bold line-through">FIX theme not saving on page change/reload</li>
          <li className="text-xl font-bold">Add README in PT (I'll do it someday..)</li>
          <li>Extra content about memoization</li>
          <li>Advanced Hooks (way too soon)</li>
        </ul>
    </section>
  )
}