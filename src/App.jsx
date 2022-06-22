import { MobileMenu } from "./components/MobileMenu"
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { isMobile, isTablet } from "react-device-detect"
import { Main } from "./components/Main"
import { About } from "./components/About"
import { Contact } from "./components/Contact"


export function App() {
  return (
    <>
      {(isMobile || isTablet) ? <MobileMenu /> : <Navbar />}
      <Header />
      <About />
      <Main />
      <Contact />
    </>
  )
}



