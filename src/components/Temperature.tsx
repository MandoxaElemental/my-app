import React from 'react'
import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from '@/services/localstorage'


const Temperature = ({city, initials, saved, currentTemp, image, status, min, max} : {city: string, initials: string, saved: string, currentTemp: string, image: string, status: string, min: string, max: string}) => {
  const Save = () => {
        const list = getLocalStorage()
        console.log(list)
        if (!list.includes(city)) {
          saveToLocalStorage(city)
      } else {
        removeFromLocalStorage(city)
      }
  }
  return (
    <div className='text-center'>
      <div className='flex justify-center items-center px-4 pb-3'>
        <p className='text-3xl font-bold'>{city}, {initials}</p>
        <img onClick={Save} className='h-[25px] w-[25px] ml-2' src={saved} alt="star" />
      </div>
        <p className='text-[#1B7E94] text-4xl'>{currentTemp}</p>
        <div className='flex justify-center'>
          <img src={image} alt="weather" />
        </div>
        <p className='text-3xl font-bold'>{status}</p>
        <div className='grid grid-cols-2 text-4xl text-[#1B7E94] p-5'>
            <p>{max}</p>
            <p className='opacity-50'>{min}</p>
        </div>
    </div>
  )
}

export default Temperature