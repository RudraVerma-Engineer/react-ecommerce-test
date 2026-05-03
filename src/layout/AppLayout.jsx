import React, { lazy } from 'react'

const Header = lazy(()=>import('../components/header.jsx'));
const Footer = lazy(()=>import('../components/Footer.jsx'));

function AppLayout() {
  return (
    <div>
        <Header/>
        <Footer/>
    </div>
  )
}

export default AppLayout
