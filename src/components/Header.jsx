import Logo from "../img/Hoowks.png"
import { motion } from "framer-motion"

export function Header() {
  return (
    <header id="header" className="flex justify-center items-center h-screen dark:bg-zinc-700 text-zinc-700 bg-zinc-200 tracking-tight dark:bg-gradient-to-b from-current to-orange-400 bg-gradient-to-t">
      <motion.div
        initial={{ x: 0, y: 0, scale: .7 }}
        whileInView={{ scale: 1.15, transition: { delay: .3, duration: .5 } }}
        className="text-center text-zinc-800">
        <motion.img
          initial={{ scale: .7 }}
          whileInView={{ scale: 1.2, rotate: 15, x: 10, transition: { delay: .2, duration: .7 } }}
          whileHover={{rotate: 210}}
          whileTap={{scale: .7}}
          src={Logo}
          alt="Hoowks Logo, a mix of a hook and an question mark"
          className="inline-block lg:h-40 h-24"
        />
        <h1 className="lg:text-7xl text-6xl font-bold">
          React<br></br>
          <span className="text-orange-400 py-1 tracking-wider uppercase lg:text-8xl text-7xl inline-block drop-shadow-lg">
            Hooks
          </span> <span className=" lg:text-4xl text-3xl">and</span>
          <span className="text-orange-300 pl-4 tracking-tighter uppercase lg:text-6xl text-6xl inline-block drop-shadow-md">
            How
          </span>
        </h1>
        <h2 className="lg:text-5xl text-4xl font-bold">to
          <span className="inline-block px-4 py-1 text-orange-200 tracking-wider font-bold uppercase lg:text-6xl text-5xl drop-shadow-md">
            Use
          </span>
          them.
        </h2>
        <h4 className="mt-2 font-normal text-orange-100 drop-shadow-sm tracking-wide">A more practical approach</h4>
      </motion.div>
    </header >
  )
}