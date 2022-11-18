import Logo from "../img/Hoowks.png"
import { motion } from "framer-motion"

export function Header() {
  return (
    <header id="header" className="flex justify-center items-center h-screen dark:bg-zinc-700 text-zinc-700 bg-zinc-200 tracking-tight dark:bg-gradient-to-b from-current to-orange-400 bg-gradient-to-t">
      <motion.div
        initial={{ scale: .2, rotate: 15 }}
        whileInView={{ scale: 1, rotate: 0, transition: { delay: .3, duration: .5 } }}
        className="text-center text-zinc-800">
        <motion.img
          initial={{ scale: .7, }}
          whileInView={{ scale: 1.5, rotate: 15, x: 10, y: -30, transition: { delay: .8, duration: .7 } }}
          whileHover={{ rotate: 210 }}
          whileTap={{ scale: .7, rotate: 210 }}
          src={Logo}
          alt="Hoowks Logo, a mix of a hook and an question mark"
          className="inline-block lg:h-40 h-24"
        />
        <div className="font-bold">
          <motion.h1
            animate={{ scale: 1.3, transition: { delay: .8, duration: .7 } }}
            className="lg:text-7xl text-6xl ">React</motion.h1><br></br>
          <motion.span
            initial={{ scale: .8 }}
            whileInView={{ scale: 1, y: -10, transition: { delay: .8, duration: .7 } }}
            whileHover={{ scale: 1.05, y: 0, transition: { duration: .7 } }}
            whileTap={{ scale: 1.1, transition: { duration: .5 } }}
            className="text-orange-400 py-1 tracking-wider uppercase lg:text-8xl text-7xl inline-block drop-shadow-lg">
            Hooks
          </motion.span>
          <motion.p
            animate={{ scale: .9, y: -10, transition: { delay: .8, duration: .7 } }}
            className=" lg:text-4xl text-3xl inline-block">
            and
          </motion.p>
          <motion.span
            initial={{ scale: .8 }}
            whileInView={{ scale: 1, transition: { delay: .8, duration: .7 } }}
            whileHover={{ scale: 1.1, transition: { duration: .5 } }}
            whileTap={{ scale: 1.1, transition: { duration: .5 } }}
            className="text-orange-300 pl-4 tracking-tighter uppercase lg:text-6xl text-6xl inline-block drop-shadow-md">
            How
          </motion.span>
        </div>
        <div className="lg:text-5xl text-4xl font-bold">
          <motion.p
            animate={{ scale: .9, y: -10, transition: { delay: .8, duration: .7 } }}
            className=" lg:text-4xl text-3xl inline-block">
            to
          </motion.p>

          <motion.span
            initial={{ scale: .8 }}
            whileInView={{ scale: 1, transition: { delay: .8, duration: .7 } }}
            whileHover={{ scale: 1.1, transition: { duration: .5 } }}
            whileTap={{ scale: 1.1, transition: { duration: .5 } }} className="inline-block px-4 py-1 text-orange-200 tracking-wider font-bold uppercase lg:text-6xl text-5xl drop-shadow-md">
            Use
          </motion.span>
          <motion.p
            animate={{ scale: .9, y: -10, transition: { delay: .8, duration: .7 } }}
            className=" lg:text-4xl text-3xl inline-block">
            them.
          </motion.p>
        </div>
        <motion.h4
          initial={{ scale: .8 }}
          whileInView={{ scale: .9, transition: { delay: .8, duration: .7 } }}
          className="mt-2 font-normal text-orange-100 drop-shadow-sm tracking-wide">
          A more practical approach
        </motion.h4>
      </motion.div>
    </header >
  )
}