import { Routes, Route } from 'react-router-dom'
import { BasicHooks } from './pages/BasicHooks'
import { Extra } from './pages/Extra'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './pages/Home'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
          <Route path={"/" | "/home"} element={<Home />} />
          <Route path="/basichooks" element={<BasicHooks />} />
          <Route path="/extra" element={<Extra />} />
      </Route>
    </Routes>
  )
}
