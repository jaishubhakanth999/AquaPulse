import React from 'react'
import FeatureCard from '../components/FeatureCard'

export default function Features(){
  const features = [
    'Smart hydration reminders',
    'Daily hydration tracking',
    'Mobile app synchronization (simulated)',
    'Temperature monitoring',
    'Battery monitoring',
    'Leak-resistant design',
    'Reusable eco-friendly design'
  ]

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-3xl font-bold text-deep mb-6'>Features</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        {features.map(f => (
          <FeatureCard key={f} title={f}>{/* description placeholder */}
            This feature helps students {f.toLowerCase()}.
          </FeatureCard>
        ))}
      </div>
    </div>
  )
}
