import { UseCallback } from "../components/IntermediateHooks/useCallback";
import { UseId } from "../components/IntermediateHooks/useId";
import { UseMemo } from "../components/IntermediateHooks/useMemo";
import { UseReducer } from "../components/IntermediateHooks/useReducer";
import { UseRef } from "../components/IntermediateHooks/useRef";

export function IntermediateHooks() {
  return (
    <section className="text-left dark:bg-zinc-700 dark:text-zinc-200 text-zinc-700 bg-zinc-200 py-24 px-4 md:px-16 lg:px-52 2xl:px-72">
      <h2 className="lg:text-5xl text-4xl font-bold border-l-8 w-fit px-4 border-orange-500">Intermediate Hooks</h2>

      <UseCallback />
      <UseId />
      <UseMemo />
      <UseReducer />
      <UseRef />

    </section>
  )
}