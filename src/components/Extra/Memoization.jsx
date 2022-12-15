export function Memoization() {
  return (
    <article className="mt-20 pb-10 border-b-2 border-zinc-300">
      <h3 className="flex items-center text-3xl font-bold mt-20 mb-4" id="memo"><span className="text-lg text-orange-500 mx-1">●</span>Memoization</h3>
      
      <p>Memoization is a technique used in computer programming to help speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs to the function are provided again in the future. This can be a useful optimization strategy when a function is called multiple times with the same input, as it allows the program to avoid repeating time-consuming computations and instead quickly return the previously computed result.</p>

    </article>
  )
}