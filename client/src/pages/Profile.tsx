import React from 'react'

export default function Profile(){
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Profile</h1>
      <div className='bg-white p-6 rounded shadow-sm max-w-xl'>
        <label className='block mb-2'>Name<input className='w-full border p-2 rounded mt-1' /></label>
        <label className='block mb-2'>Email<input className='w-full border p-2 rounded mt-1' /></label>
        <label className='block mb-2'>University<input className='w-full border p-2 rounded mt-1' /></label>
        <label className='block mb-4'>Hydration Goal (ml)<input className='w-full border p-2 rounded mt-1' /></label>
        <button className='px-4 py-2 bg-aqua text-white rounded'>Save profile</button>
      </div>
    </div>
  )
}
