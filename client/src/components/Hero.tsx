import React from 'react'

export default function Hero(){
  return (
    <section className='bg-gradient-to-b from-white to-slate-50 py-16'>
      <div className='container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-deep mb-4'>Stay Hydrated. Stay Focused. Stay Powered.</h1>
          <p className='text-gray-700 mb-6'>AquaPulse is a smart reusable water bottle designed for university students — track intake, get reminders, and keep your hydration streak alive.</p>
          <div className='flex gap-3'>
            <a href='/register' className='px-5 py-3 rounded-md bg-aqua text-white font-semibold'>Start Your Hydration Journey</a>
            <a href='/product' className='px-5 py-3 rounded-md border border-gray-200'>Explore AquaPulse</a>
          </div>

          <div className='mt-8 grid grid-cols-3 gap-4'>
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <div className='text-sm text-gray-500'>Battery</div>
              <div className='font-semibold text-deep'>82%</div>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <div className='text-sm text-gray-500'>Temp</div>
              <div className='font-semibold text-deep'>14°C</div>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-sm'>
              <div className='text-sm text-gray-500'>Daily Goal</div>
              <div className='font-semibold text-deep'>2000 ml</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-80 h-96 bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-2xl flex items-center justify-center'>
            <img src='/src/assets/bottle-mockup.png' alt='AquaPulse bottle mockup' className='w-56' />
          </div>
        </div>
      </div>
    </section>
  )
}
