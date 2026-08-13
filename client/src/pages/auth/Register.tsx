import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register(){
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const navigate = useNavigate()

  function validate(){
    if(!fullName || !email || !password) return 'Please fill required fields'
    if(password.length < 8) return 'Password should be at least 8 characters'
    if(password !== confirm) return 'Passwords do not match'
    return null
  }

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    const err = validate(); if(err){ toast.error(err); return }
    toast.success('Registration simulated — please use demo login')
    navigate('/login')
  }

  return (
    <div className='container mx-auto px-4 py-12 max-w-md'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Create account</h1>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-sm'>
        <label className='block mb-2'>Full name<input className='w-full border p-2 rounded mt-1' value={fullName} onChange={e=>setFullName(e.target.value)} required /></label>
        <label className='block mb-2'>Email<input className='w-full border p-2 rounded mt-1' type='email' value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label className='block mb-2'>Password<input className='w-full border p-2 rounded mt-1' type='password' value={password} onChange={e=>setPassword(e.target.value)} required /></label>
        <label className='block mb-4'>Confirm password<input className='w-full border p-2 rounded mt-1' type='password' value={confirm} onChange={e=>setConfirm(e.target.value)} required /></label>
        <button className='px-4 py-2 bg-aqua text-white rounded w-full'>Create account</button>
      </form>
    </div>
  )
}
