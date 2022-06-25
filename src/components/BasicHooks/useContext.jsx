import { useContext } from 'react'
import { Code, PreCode } from '../Snippets/RepeatedCode'

export function UseContext() {
  return (
    <article id="context" className='border-b-2 border-orange-300 my-20'>
      <h3 className="text-4xl font-bold mb-4">useContext</h3>

      <p>The Context lets you subscribe to React context without introducing nesting, basically, a way to manage state globally.</p>

      <PreCode code={`const value = useContext(MyContext);`} />

      <h3 className="text-xl font-bold mt-4">So, a global useState?</h3>
      <p>Pretty much. It can be used together with the <Code content="useState" /> Hook to share state between deeply nested components more easily than with <Code content="useState" /> alone.</p>

      <h3 className="text-xl font-bold mt-4">Ok, how does it work?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium accusamus nulla alias similique nihil voluptatem dolores fuga, reprehenderit voluptas veritatis iusto eaque quam labore corporis! Facilis laudantium mollitia magnam!</p>

      <a href="https://reactjs.org/docs/hooks-reference.html#usecontext" className="text-sm inline-block my-4 hover:text-orange-500">Official Docs</a>
    </article>
  )
}

