import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Contact(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    if(!name || !email || !subject || !message){
      toast.error('Please fill all fields')
      return
    }
    setLoading(true)
    try{
      // This will attempt to post to /api/contact on a real backend. For demo it may fail.
      await axios.post('/api/contact',{name,email,subject,message})
      toast.success('Message sent — thank you!')
      setName('');setEmail('');setSubject('');setMessage('')
    }catch(err){
      console.warn(err)
      toast.info('This demo frontend attempts to send the message to /api/contact. If no backend is present, this will fail silently for the demo.')
    }finally{setLoading(false)}
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-3xl font-bold text-deep mb-4'>Contact</h1>
      <form onSubmit={handleSubmit} className='max-w-xl'>
        <label className='block mb-2'>Full name<input className='w-full border p-2 rounded mt-1' value={name} onChange={e=>setName(e.target.value)} required /></label>
        <label className='block mb-2'>Email<input type='email' className='w-full border p-2 rounded mt-1' value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label className='block mb-2'>Subject<input className='w-full border p-2 rounded mt-1' value={subject} onChange={e=>setSubject(e.target.value)} required /></label>
        <label className='block mb-4'>Message<textarea className='w-full border p-2 rounded mt-1' rows={6} value={message} onChange={e=>setMessage(e.target.value)} required /></label>
        <button type='submit' className='px-4 py-2 bg-aqua text-white rounded' disabled={loading}>{loading? 'Sending...' : 'Send Message'}</button>
      </form>
    </div>
  )
}
