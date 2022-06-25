import { LifeCycles } from "./Lifecycles";

export function Extra() {
  return (
    <section className="mt-20">
        <h3 className="text-5xl font-bold mb-4" id="extra">Some Extra Content</h3>
        <p className="text-sm">Might be useful, idk.</p>

        <LifeCycles />

        <h3 className="text-3xl font-bold mb-4">TODO</h3>
        <ul>
          <li>Hook Logo</li>
          <li>Maybe more Extra Content?</li>
          <li>More advanced Hooks</li>
          <li>Add README in EN and PT</li>
          <li>useContext Example?</li>
          <li>Port to Typescript?</li>
        </ul>
    </section>
  )
}