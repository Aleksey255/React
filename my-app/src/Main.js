import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'



export default function Main() {
  return (
    <div>
        <HashRouter>
            <NavBar />

            <Routes>
                <Route exact path = '/' element = <Home /> />
                <Route exact path = '/about' element = <About /> />
                <Route exact path = '/contact' element = <Contact /> />
            </Routes>
        </HashRouter>
    </div>
  )
}
