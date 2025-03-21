import React from 'react'

const MainCard = ({ title, weatherComponent } : { title: string, weatherComponent: React.ReactNode }) => {
  return (
    <div className='min-h-[100%] w-[100%] bg-[#E6E6E6] rounded-xl'>
        <div className='rounded-t-xl bg-[#1B7E94] font-bold text-2xl text-center p-2'>{title}</div>
        <div className='m-2'>{weatherComponent}</div>
    </div>
  )
}

export default MainCard