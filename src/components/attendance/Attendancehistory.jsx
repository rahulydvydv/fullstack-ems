import React from 'react'
import { getDayTypeDisplay } from "../../assets/assets";
import { differenceInMinutes, format, isValid, parse } from "date-fns";

const formatDate = (value) => {
  const date = new Date(value)
  return isValid(date) ? format(date, "MMM dd, yyyy") : "_"
}

const formatTime = (value) => {
  if (!value || value === "-") return "_"

  const date = parseTimeValue(value)
  if (isValid(date)) return format(date, "hh:mm a")

  return "_"
}

const parseTimeValue = (value) => {
  const date = new Date(value)
  if (isValid(date)) return date

  const time = parse(value, "hh:mm a", new Date())
  return isValid(time) ? time : null
}

const getWorkingHoursDisplay = (record) => {
  if (record.workingHours) return record.workingHours

  const checkIn = parseTimeValue(record.checkIn)
  const checkOut = parseTimeValue(record.checkOut)

  if (!checkIn || !checkOut) return "_"

  const minutes = differenceInMinutes(checkOut, checkIn)
  if (minutes < 0) return "_"

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return `${hours}h ${remainingMinutes}m`
}

const Attendancehistory = ({history}) => {
  return (
    <div className='card overflow-hidden'>
      
      <div className='px-6 py-4 border-b border-slate-100'>
        <h3 className='font-semibold text-slate-900'>Recent Activity</h3>
      </div>

      <div className='overflow-x-auto'>
        <table className='table-modern'>
          
          <thead>
            <tr>
              <th className='px-6 py-4'>Date</th>
              <th className='px-6 py-4'>Check In</th> 
              <th className='px-6 py-4'>Check Out</th>
              <th className='px-6 py-4'>Working Hours</th>
              <th className='px-6 py-4'>Day Type</th>
              <th className='px-6 py-4'>Status</th>
            </tr>
          </thead>
          
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={6} className='text-center py-12 text-slate-400'>
                  NO records found
                </td>
              </tr>
            ):(
              history.map((record)=>{
                const dayType = getDayTypeDisplay(record.status)
                return(
                  <tr key={record._id || record.id}>
                    <td className='px-6 py-6 font-medium text-slate-900'>
                      {formatDate(record.date)}
                    </td>
                    
                    <td className='px-6 py-4 text-slate-600'>
                      {formatTime(record.checkIn)}
                    </td>

                    <td className='px-6 py-4 text-slate-600'>
                      {formatTime(record.checkOut)}
                    </td>

                    <td className='px-6 py-4 text-slate-600 font-medium'>
                      {getWorkingHoursDisplay(record)}
                    </td>

                    <td className='px-6 py-4 text-slate-600'>
                      {dayType}
                    </td>

                    <td className='px-6 py-4 text-slate-600'>
                      {record.status || "_"}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Attendancehistory
