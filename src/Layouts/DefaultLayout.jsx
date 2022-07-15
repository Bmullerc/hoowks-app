import { MobileMenu } from "./MobileMenu"
import { Navbar } from "./Navbar"
import { isMobile, isTablet } from "react-device-detect"
import { Outlet } from 'react-router-dom'
import { Contact } from '../components/Contact'


export function DefaultLayout() {
  return (
    <div>
      {(isMobile || isTablet) ? <MobileMenu /> : <Navbar />}
      <Outlet />
      <Contact />
    </div>
  )
}