import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

type Entry = { id:string, amount:number, timestamp:string }

export default function Dashboard(){
  const { user } = useAuth()
  const [entries, setEntries] = useState<Entry[]>(() => {
    try{ const raw = localStorage.getItem('ap_entries'); return raw? JSON.parse(raw): [] }catch{return []}
  })
  const dailyGoal = 2000
  const todayTotal = entries.filter(e=>new Date(e.timestamp).toDateString()===new Date().toDateString()).reduce((s,e)=>s+e.amount,0)

  useEffect(()=>{ localStorage.setItem('ap_entries', JSON.stringify(entries)) },[entries])

  function add(amount:number){
    setEntries(prev=>[{id:Date.now().toString(),amount,timestamp:new Date().toISOString()},...prev])
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-2xl font-semibold text-deep mb-4'>Dashboard</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded shadow-sm'>
          <div className='text-sm text-gray-500'>Today's Goal</div>
          <div className='text-2xl font-semibold'>{dailyGoal} ml</div>
          <div className='mt-4 text-sm text-gray-600'>Consumed: {todayTotal} ml</div>
          <div className='mt-2 text-sm text-gray-600'>Progress: {Math.min(100, Math.round((todayTotal/dailyGoal)*1000)/10)}%</div>
        </div>

        <div className='md:col-span-2 bg-white p-6 rounded shadow-sm'>
          <div className='flex items-center justify-between mb-4'>
            <div className='font-semibold'>Add Water</div>
            <div className='text-sm text-gray-500'>Quick add</div>
          </div>
          <div className='flex gap-3'>
            <button onClick={()=>add(100)} className='px-4 py-2 bg-slate-100 rounded'>+100 ml</button>
            <button onClick={()=>add(250)} className='px-4 py-2 bg-slate-100 rounded'>+250 ml</button>
            <button onClick={()=>add(500)} className='px-4 py-2 bg-slate-100 rounded'>+500 ml</button>
          </div>
          <div className='mt-4'>
            <label className='flex gap-2 items-center'>Custom amount<input id='custom-amt' type='number' className='border p-2 rounded w-32' placeholder='ml' />
              <button onClick={()=>{ const el:any=document.getElementById('custom-amt'); const v = Number(el.value); if(v>0) add(v); else alert('Enter positive ml') }} className='px-3 py-1 bg-aqua text-white rounded'>Add</button>
            </label>
          </div>
          <div className='mt-6'>
            <h3 className='font-semibold mb-2'>Recent Activity</h3>
            <ul className='space-y-2'>
              {entries.slice(0,6).map(e=> (
                <li key={e.id} className='flex justify-between text-sm'><span>{new Date(e.timestamp).toLocaleTimeString()} — {e.amount} ml</span><span className='text-gray-500'>{new Date(e.timestamp).toLocaleDateString()}</span></li>
              ))}
              {entries.length===0 && <div className='text-gray-500'>No activity yet — add your first drink.</div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
