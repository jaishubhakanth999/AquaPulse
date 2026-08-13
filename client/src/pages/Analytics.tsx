import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const sample = [
  {day:'Mon', ml:1500},
  {day:'Tue', ml:1800},
  {day:'Wed', ml:2000},
  {day:'Thu', ml:1700},
  {day:'Fri', ml:2200},
  {day:'Sat', ml:900},
  {day:'Sun', ml:1200}
]

export default function Analytics(){
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-2xl font-semibold text-deep mb-6'>Hydration Analytics</h1>
      <div className='bg-white p-6 rounded shadow-sm'>
        <h3 className='font-semibold mb-4'>Weekly Intake</h3>
        <div style={{width:'100%',height:300}}>
          <ResponsiveContainer>
            <LineChart data={sample}>
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='ml' stroke='#00B4D8' strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='grid md:grid-cols-4 gap-4 mt-6'>
        <div className='bg-white p-4 rounded shadow-sm'>Average daily intake<div className='text-2xl font-semibold'>1600 ml</div></div>
        <div className='bg-white p-4 rounded shadow-sm'>Best hydration day<div className='text-2xl font-semibold'>Friday — 2200 ml</div></div>
        <div className='bg-white p-4 rounded shadow-sm'>Current streak<div className='text-2xl font-semibold'>4 days</div></div>
        <div className='bg-white p-4 rounded shadow-sm'>Longest streak<div className='text-2xl font-semibold'>12 days</div></div>
      </div>
    </div>
  )
}
