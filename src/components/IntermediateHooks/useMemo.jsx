import { Code, HotTip } from "../Snippets/RepeatedCode";

export function UseMemo() {
  return (
    <article id="usememo" className='border-b-2 border-orange-300 my-20 pb-20'>

      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">3●</span>useMemo</h3>
      <p>The <Code children="useMemo" /> Hook returns a <Code children="memoized" /> value.</p>

      <HotTip children={<p className="dark:text-zinc-700">You can get a refresher in what <Code>memoization</Code> means <a href='/extra/#memo' className='text-orange-600 hover:text-zinc-100 rounded-sm'>here</a>.</p>}/>

    </article>
  )
}