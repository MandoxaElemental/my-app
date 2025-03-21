import React from 'react'

const Forecast = ({icon1, icon2, icon3, icon4, icon5, temp1, temp2, temp3, temp4, temp5} : {icon1: string, icon2: string, icon3: string, icon4: string, icon5: string, temp1: string, temp2: string, temp3: string, temp4: string, temp5: string} ) => {
  return (
    <div className='grid grid-cols-5 text-[#1B7E94] text-2xl'>
        <div className='text-center'>
            <p>Day</p>
            <div className='flex justify-center'>
                <img src={icon1} alt="icon" />
            </div>
            <p>{temp1}</p>
        </div>
        <div className='text-center'>
            <p>Day</p>
            <div className='flex justify-center'>
                <img src={icon2} alt="icon" />
            </div>
            <p>{temp2}</p>
        </div>
        <div className='text-center'>
            <p>Day</p>
            <div className='flex justify-center'>
                <img src={icon3} alt="icon" />
            </div>
            <p>{temp3}</p>
        </div>
        <div className='text-center'>
            <p>Day</p>
            <div className='flex justify-center'>
                <img src={icon4} alt="icon" />
            </div>
            <p>{temp4}</p>
        </div>
        <div className='text-center'>
            <p>Day</p>
            <div className='flex justify-center'>
                <img src={icon5} alt="icon" />
            </div>
            <p>{temp5}</p>
        </div>
    </div>
  )
}

export default Forecast