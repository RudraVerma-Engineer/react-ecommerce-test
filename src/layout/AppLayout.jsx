import { lazy } from 'react'
import {Outlet} from "react-router-dom";


// const Header = lazy(()=>import('../components/header.jsx'));
const Footer = lazy(()=>import('../components/Footer.jsx'));

import Header from '../components/Header.jsx';

function AppLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout
