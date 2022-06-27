import React, { FC, useState } from 'react'

export const GithubCalendar: FC = ({  contributions }) => {
  const [ weeks ] = useState(contributions?.contributionCalendar?.weeks?.slice(contributions?.contributionCalendar?.weeks.length / 2) || [])
  return (
    <div className='flex space-x-2 p-3 bg-white rounded-lg'>
      {weeks.map((week) => (
        <div key={week.firstDay} className="space-y-2">
          {week?.contributionDays?.map((day) => (
            <div style={{ backgroundColor: day?.color}} className='w-4 h-4' />
          ))}
        </div>
      ))}
    </div>
  )
}