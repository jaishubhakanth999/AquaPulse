import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { useAuth } from '../context/AuthContext'

export default function MainLayout(){
  const { user, logout } = useAuth()
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <Logo />
            <span className='font-semibold text-lg text-deep'>AquaPulse</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            <Link to='/features' className='text-gray-700 hover:text-deep'>Features</Link>
            <Link to='/product' className='text-gray-700 hover:text-deep'>Product</Link>
            <Link to='/about' className='text-gray-700 hover:text-deep'>About</Link>
            <Link to='/contact' className='text-gray-700 hover:text-deep'>Contact</Link>
            <Link to='/analytics' className='text-gray-700 hover:text-deep'>Analytics</Link>
            {user ? (
              <>
                <Link to='/dashboard' className='px-3 py-1 rounded-md bg-aqua text-white'>Dashboard</Link>
                <button onClick={logout} className='text-sm text-gray-600'>Logout</button>
              </>
            ) : (
              <Link to='/login' className='px-3 py-1 rounded-md border border-aqua text-aqua'>Sign in</Link>
            )}
          </nav>
          <div className='md:hidden'>
            <Link to='/menu' className='text-gray-700'>Menu</Link>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        <Outlet />
      </main>

      <footer className='bg-white border-t mt-12'>
        <div className='container mx-auto px-4 py-8 text-center text-sm text-gray-600'>
          © {new Date().getFullYear()} AquaPulse — Stay Hydrated. Stay Focused. Stay Powered.
        </div>
      </footer>
    </div>
  )
}
