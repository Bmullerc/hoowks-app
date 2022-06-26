import { LifeCycles } from "./Lifecycles";

export function Extra() {
  return (
    <section className="mt-20">
        <h3 className="text-5xl font-bold mb-4" id="extra">Some Extra Content</h3>
        <p className="text-sm">Might be useful, idk.</p>

        <LifeCycles />

        <h3 className="text-3xl font-bold mb-4 mt-12">TODO</h3>
        <ul className="list-disc list-inside">
          <li className="text-xl font-bold line-through">Hook Logo</li>
          <li className="text-xl font-bold line-through">Add Favicon</li>
          <li className="text-xl font-bold">Add README in EN and PT</li>
          <li className="text-xl font-bold">Advanced Hooks</li>
          <li>Maybe more "Extra Content" ?</li>
          <li>useContext Example ?</li>
          <li>Port to Typescript ?</li>
          <li>Typescript / Next versions ???</li>
        </ul>
    </section>
  )
}