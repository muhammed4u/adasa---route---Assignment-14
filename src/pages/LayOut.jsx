import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const LayOut = () => {
  return (
    <>
     <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayOut