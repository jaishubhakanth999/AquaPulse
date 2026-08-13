import React from 'react'

export default function HydrationHistory(){
  const raw = localStorage.getItem('ap_entries')
  const entries = raw? JSON.parse(raw) : []

  const grouped = entries.reduce((acc:any, e:any)=>{
    const d = new Date(e.timestamp).toDateString()
    acc[d] = acc[d] || { total:0, count:0 }
    acc[d].total += e.amount; acc[d].count += 1
    return acc
  }, {})

  const rows = Object.entries(grouped).map(([date, v]:any)=>({date, total:v.total, count:v.count}))

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Hydration History</h1>
      <div className='bg-white p-6 rounded shadow-sm'>
        <table className='w-full'>
          <thead className='text-left text-sm text-gray-600'><tr><th>Date</th><th>Total (ml)</th><th>Drinks</th><th>Goal</th></tr></thead>
          <tbody>
            {rows.map(r=> (
              <tr key={r.date} className='border-t'><td className='py-3'>{r.date}</td><td>{r.total}</td><td>{r.count}</td><td>2000</td></tr>
            ))}
            {rows.length===0 && <tr><td colSpan={4} className='py-6 text-gray-500'>No history yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
