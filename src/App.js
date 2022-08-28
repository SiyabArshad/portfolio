import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Forgot from './pages/Forgot'
import Pagnotfound from './pages/Pagnotfound'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  const user=true
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/project/:id" element={<Details/>}></Route>
    <Route path="/reset" element={!user?<Forgot/>:<Admin/>}></Route>
    <Route path="/login" element={!user?<Login/>:<Admin/>}></Route>
    <Route path="/admin" element={user?<Admin/>:<Login/>}></Route>
    <Route path='*' element={<Pagnotfound/>}></Route>
    </Routes>
  </BrowserRouter>
    )
}
