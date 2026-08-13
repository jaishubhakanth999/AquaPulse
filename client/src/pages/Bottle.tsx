import React from 'react'

export default function Bottle(){
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Bottle</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded shadow-sm'>
          <div className='text-sm text-gray-500'>Bottle name</div>
          <div className='text-xl font-semibold'>AquaPulse — Campus</div>
          <div className='mt-4'>
            <div className='text-sm text-gray-500'>Connection status</div>
            <div className='font-semibold text-green-600'>Simulated: Connected</div>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-3'>
            <div className='bg-slate-50 p-4 rounded'><div className='text-sm text-gray-500'>Battery</div><div className='font-semibold'>82%</div></div>
            <div className='bg-slate-50 p-4 rounded'><div className='text-sm text-gray-500'>Temp</div><div className='font-semibold'>14°C</div></div>
            <div className='bg-slate-50 p-4 rounded'><div className='text-sm text-gray-500'>Water level</div><div className='font-semibold'>60%</div></div>
          </div>
        </div>
        <div className='bg-white p-6 rounded shadow-sm'>
          <h3 className='font-semibold mb-2'>Simulated actions</h3>
          <p className='text-gray-600 mb-4'>Use the buttons below to simulate syncing or resetting your bottle.</p>
          <div className='flex gap-3'>
            <button className='px-4 py-2 bg-aqua text-white rounded'>Connect Bottle</button>
            <button className='px-4 py-2 border rounded'>Sync Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
