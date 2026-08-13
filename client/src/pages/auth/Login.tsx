import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    if(!email || !password){ toast.error('Please enter email and password'); return }
    // Demo login: accept demo@student.edu / DemoPass123!
    if(email==='demo@student.edu' && password==='DemoPass123!'){
      login('demo-token',{id:'1',fullName:'Demo Student',email})
      toast.success('Logged in (demo)')
      navigate('/dashboard')
      return
    }

    try{
      // Real backend call would go here
      toast.info('No backend present — demo login only')
    }catch(err){
      toast.error('Login failed')
    }
  }

  return (
    <div className='container mx-auto px-4 py-12 max-w-md'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Sign in</h1>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-sm'>
        <label className='block mb-2'>Email<input className='w-full border p-2 rounded mt-1' type='email' value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label className='block mb-4'>Password<input className='w-full border p-2 rounded mt-1' type='password' value={password} onChange={e=>setPassword(e.target.value)} required /></label>
        <button className='px-4 py-2 bg-aqua text-white rounded w-full'>Sign in</button>
      </form>
      <div className='mt-4 text-sm'>Demo account: demo@student.edu / DemoPass123!</div>
    </div>
  )
}
