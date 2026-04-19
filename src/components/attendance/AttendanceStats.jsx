import { AlertCircleIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import React from 'react'

const AttendanceStats = ({history}) => {

  const totalPresent = history.filter(
    (h)=> h.status === "PRESENT" || h.status === "LATE"
  ).length;

  const totalLate = history.filter(
    (h)=> h.status === "LATE"
  ).length;

  const stats = [
    {label: "Days Present" , value: '2', totalPresent , icon: CalendarIcon },
    {label: "Late Arrival" , value: totalLate , icon: AlertCircleIcon },
    {label: "Avg. Work Hrs" , value: 8.5 , icon: ClockIcon },
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8'>
      {stats.map((s)=>(
        <div key={s.label} className='relative p-5 sm:p-6 flex items-center gap-4 bg-white rounded-xl shadow-sm'>

          {/* left border */}
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-slate-300 rounded-r-full'></div>

          {/* icon */}
          <div className='p-3 bg-slate-100 rounded-lg'>
            <s.icon className='w-5 h-5 text-slate-600'/>
          </div>

          {/* text */}
          <div>
            <p className='text-sm text-slate-500'>{s.label}</p>
            <p className='text-2xl font-medium text-slate-900'>{s.value}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default AttendanceStats