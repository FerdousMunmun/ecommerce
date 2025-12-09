// src/components/layouts/Rootlayout.jsx
import Header from '/src/components/layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '/src/components/layouts/Footer'

const Rootlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Rootlayout
