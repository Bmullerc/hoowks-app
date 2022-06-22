export function About() {
  return (
    <aside
      id="about"
      className="flex flex-col gap-1 text-center items-center 2xl:px-72 lg:px-52 md:px-16 px-4 pt-12 pb-24 dark:bg-orange-400 dark:text-zinc-700 text-orange-400 bg-zinc-700 tracking-tight font-normal"
    >

      <h2 className="lg:text-4xl text-3xl font-bold">About this Project</h2>

      <p className="mt-4">Since I am a person that learns pretty much only by doing, this is a personal project that achieves two goals, learning and practicing React Hooks. By pretending to teach, I must research and understand to then be able to explain, making this a very good study case. Also, since I am making this from scratch, everything involved in its creation is just extra knowledge that I can also apply. This includes Vite, TailwindCSS, HeadlessUI, React componentization and prop usage, installing and configuring dependencies, some good practices like using semantic HTML tags, proper accessibility, responsiveness, skills like layout and UI design and deploying.</p>

      <p className="mt-2">This is obviously heavily inspired by the <a href="https://www.w3schools.com/" className="font-medium hover:text-orange-600">W3Schools</a>, <a href="https://developer.mozilla.org/en-US/" className="font-medium hover:text-orange-600">MDN Docs</a> and the <a href="https://reactjs.org/docs/getting-started.html" className="font-medium hover:text-orange-600">React Docs</a> and some information will be straight up copied from these sources (Please don't sue me).</p>

      <h3 className="lg:text-3xl text-2xl mt-6 font-bold">Disclaimer:</h3>

      <p className="mt-4">This is coming from a student, aspiring to be a junior developer soon, so keep that in mind. If something is wrong or missing critical information, I will try my best to fix it asap.</p>

    </aside>
  )
}