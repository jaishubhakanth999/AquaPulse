import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Features from './pages/Features'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Bottle from './pages/Bottle'
import HydrationHistory from './pages/HydrationHistory'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='features' element={<Features />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='profile' element={<Profile />} />
          <Route path='bottle' element={<Bottle />} />
          <Route path='history' element={<HydrationHistory />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}
