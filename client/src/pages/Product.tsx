import React from 'react'
import FeatureCard from '../components/FeatureCard'

export default function Product(){
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <div className='w-full h-96 bg-gradient-to-br from-slate-100 to-white rounded-3xl flex items-center justify-center'>
            <img src='/src/assets/bottle-mockup.png' alt='product' className='w-72' />
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-bold text-deep mb-3'>AquaPulse — Smart Water Bottle</h1>
          <p className='text-gray-700 mb-4'>Fictional product — designed for university students to track hydration, receive reminders, and sync with a companion app. (This is a demo product.)</p>
          <div className='mb-4'>
            <strong>Price:</strong> $49.99 (preorder)
          </div>
          <div className='grid gap-3'>
            <FeatureCard title='Battery'>Long-lasting 7-day battery life (simulated).</FeatureCard>
            <FeatureCard title='Materials'>BPA-free stainless steel, leak-resistant cap.</FeatureCard>
            <FeatureCard title='Capacity'>600 ml</FeatureCard>
          </div>
          <div className='mt-6'>
            <button className='px-5 py-3 bg-aqua text-white rounded-md'>Preorder</button>
          </div>
        </div>
      </div>
    </div>
  )
}
