import { useContext } from 'react'
import { Code, HotTip, PreCode } from '../Snippets/RepeatedCode'

export function UseContext() {
  return (
    <article id="context" className='border-b-2 border-orange-300 my-20'>
      <h3 className="flex items-baseline text-4xl font-bold mb-4"><span className="text-lg text-orange-500 mx-1">3●</span>useContext</h3>

      <p>The Context lets you subscribe to React context without introducing nesting, basically, a way to manage state globally. </p>

      <PreCode code={`const value = useContext(MyContext);`} />

      <h3 className="text-xl font-bold mt-12 mb-4">So, a global useState?</h3>
      <p>It can be used together with the <Code content="useState" /> Hook to share state between deeply nested components more easily than with <Code content="useState" /> alone.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Can't I just stay with useState then?</h3>
      <p>The problem is that state should be held by the highest parent component in the stack and if, for example, we have many nested components and the top and bottom ones need access to the state, we would need to pass the state as <Code content="props" /> through each nested component. Something like this:</p>

      <PreCode
        code={`function Component1() {
  const [user, setUser] = useState("Juca Silva");

  return (
    <>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}`} />

      <p>Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.</p>

      <HotTip
        text={<p className="dark:text-zinc-700">Like in the example above, passing the state as <Code content="props" /> is called "prop drilling" and can become a problem in larger projects. It should be avoided.</p>} />

      <h3 className="text-xl font-bold mt-12 mb-4">Ok... But how does it work?</h3>
      <p>We must first Import <Code content="createContext" /> and initialize it to then be able to create context.</p>

      <PreCode
        code={`import { useState, createContext } from "react";

const UserContext = createContext()`} />

      <p>Next we'll use the Context Provider to wrap the tree of components that need the state Context.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Context What?</h3>
      <p>Context Provider. Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a <Code content="value" /> prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.</p>

      <PreCode
        code={`function Component1() {
  const [user, setUser] = useState("Juca Silva");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}`} />

      <p>Now, all components in this tree will have access to the user Context.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Yeah, but where is the useContext hook?</h3>
      <p>In order to use the Context in a child component, we need to access it using the <Code content="useContext" /> Hook. First, include it in the import statement:</p>

      <PreCode code={`import { useState, createContext, useContext } from "react";`} />

      <p>Then you can access the user Context in all components:</p>

      <PreCode
        code={`function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}`} />

      <h3 className="text-xl font-bold mt-12">Full example:</h3>

      <PreCode
        code={`import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Juca Silva");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}`} />

      <h3 className="text-3xl font-bold mt-20">Another Example:</h3>

      <PreCode
      code={`import { createContext, useState, useEffect } from "react";

export const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});

export function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}`} />

      <p className="text-xs inline-block mt-8 mb-20">For more, check the <a href="https://reactjs.org/docs/hooks-reference.html#usecontext" className="hover:text-orange-500">Official Docs</a>.</p>

    </article>
  )
}


