import * as React from 'react'
import "../stylesheets/home.css"
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import Reviews from '../components/Reviews'
import Projects from '../components/Projects'

export default function Home() {
  return (
  <>
    <Navbar></Navbar>
    <Topbar></Topbar>
    <Technologies></Technologies>
    <Projects></Projects>
    <Reviews></Reviews>
    <About></About>
    <Contact></Contact>
  </>
  )
}
