import React from 'react'

export default function CTA(){
  return (
    <section className='py-12 bg-aqua/5'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-2xl font-semibold text-deep mb-2'>Ready to pulse your day?</h3>
        <p className='text-gray-700 mb-4'>Join students worldwide who are boosting focus with better hydration.</p>
        <a href='/register' className='px-6 py-3 bg-aqua text-white rounded-md font-semibold'>Create Free Account</a>
      </div>
    </section>
  )
}
