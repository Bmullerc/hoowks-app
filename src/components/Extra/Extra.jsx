import { LifeCycles } from "./Lifecycles";

export function Extra() {
  return (
    <section className="mt-20">
        <h3 className="text-5xl font-bold mb-4" id="extra">Some Extra Content</h3>
        <p className="text-sm">Might be useful, idk.</p>

        <LifeCycles />

        <h3 className="text-3xl font-bold mb-4 mt-12">TODO List</h3>
        <ul className="list-disc list-inside">
          <li className="text-xl font-bold">Add README in PT</li>
          <li className="text-xl font-bold">Intermediate Hooks</li>
          <li className="text-xl font-bold">React Router</li>
          <li>Extra content about memoization</li>
          <li>Advanced Hooks</li>
        </ul>
    </section>
  )
}