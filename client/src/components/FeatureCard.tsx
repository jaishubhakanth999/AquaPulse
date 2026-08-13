import React from 'react'

export default function FeatureCard({title, children}:{title:string, children:React.ReactNode}){
  return (
    <div className='bg-white p-6 rounded-xl shadow-sm'>
      <h4 className='font-semibold text-deep mb-2'>{title}</h4>
      <div className='text-gray-600 text-sm'>{children}</div>
    </div>
  )
}
