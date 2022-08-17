import { Hydration } from "../components/Extra/Hydration";
import { LifeCycles } from "../components/Extra/Lifecycles";
import { Memoization } from "../components/Extra/Memoization";

export function Extra() {
  return (
    <section className="text-left dark:bg-zinc-700 dark:text-zinc-200 text-zinc-700 bg-zinc-200 py-24 px-4 md:px-16 lg:px-52 2xl:px-72">
      <h3 className="w-fit text-5xl font-bold mb-4 border-l-8 px-4 border-orange-500" id="extra">Some Extra Content</h3>
      <p className="text-sm">Might be useful, idk.</p>

      <LifeCycles />
      <Memoization />
      <Hydration />

      <h3 className="text-3xl font-bold mb-4 mt-12">TODO List</h3>
      <ul className="list-disc list-inside">
        <li className="text-xl font-bold underline">Extra content about memoization (useCallback / useMemo)</li>
        <li className="text-xl font-bold underline">Intermediate Hooks</li>
        <li className="text-xl font-bold">Extra Content about "Making Your Own Custom Hooks"</li>
        <li>Change Previews after Int. Hooks are finished</li>
        <li>Testing</li>
        <li>Advanced Hooks (way too soon)</li>
        <li>Add README in PT (I'll do it someday..)</li>
      </ul>
    </section>
  )
}