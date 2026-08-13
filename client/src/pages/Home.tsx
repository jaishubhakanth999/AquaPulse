import React from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import Testimonial from '../components/Testimonial'

export default function Home(){
  return (
    <div>
      <Hero />

      <section className='container mx-auto px-4 py-12'>
        <h2 className='text-2xl font-semibold text-deep mb-6'>Key Benefits</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <FeatureCard title='Track Intake'>Keep an accurate daily log of your water consumption with quick-add buttons.</FeatureCard>
          <FeatureCard title='Hydration Reminders'>Customize reminder frequency to suit your study schedule.</FeatureCard>
          <FeatureCard title='Device Status'>Monitor bottle battery, temperature and last sync.</FeatureCard>
        </div>
      </section>

      <section className='bg-slate-50 py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-semibold text-deep mb-6'>Student Testimonials</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
