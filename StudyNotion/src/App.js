import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>


      </Routes>
    </div>
  )
}

export default App

