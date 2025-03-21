import React, { useEffect, useState } from 'react'

const Forecast = ({icon1, icon2, icon3, icon4, icon5, temp1, temp2, temp3, temp4, temp5} : {icon1: string, icon2: string, icon3: string, icon4: string, icon5: string, temp1: string, temp2: string, temp3: string, temp4: string, temp5: string} ) => {
  
    const now = new Date();
    const daysOfWeek = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    const dayOfWeek = daysOfWeek[now.getDay()];

        const [day1, setDay1] = useState('')
        const [day2, setDay2] = useState('')
        const [day3, setDay3] = useState('')
        const [day4, setDay4] = useState('')
        const [day5, setDay5] = useState('')
    
    function DayShifter(){
        if(dayOfWeek === daysOfWeek[0]){
            setDay1(daysOfWeek[0])
            setDay2(daysOfWeek[1])
            setDay3(daysOfWeek[2])
            setDay4(daysOfWeek[3])
            setDay5(daysOfWeek[4])
        } else if(dayOfWeek === daysOfWeek[1]){
            setDay1(daysOfWeek[1])
            setDay2(daysOfWeek[2])
            setDay3(daysOfWeek[3])
            setDay4(daysOfWeek[4])
            setDay5(daysOfWeek[5])
        } else if(dayOfWeek === daysOfWeek[2]){
            setDay1(daysOfWeek[2])
            setDay2(daysOfWeek[3])
            setDay3(daysOfWeek[4])
            setDay4(daysOfWeek[5])
            setDay5(daysOfWeek[6])
        } else if(dayOfWeek === daysOfWeek[3]){
            setDay1(daysOfWeek[3])
            setDay2(daysOfWeek[4])
            setDay3(daysOfWeek[5])
            setDay4(daysOfWeek[6])
            setDay5(daysOfWeek[0])
        } else if(dayOfWeek === daysOfWeek[4]){
            setDay1(daysOfWeek[4])
            setDay2(daysOfWeek[5])
            setDay3(daysOfWeek[6])
            setDay4(daysOfWeek[0])
            setDay5(daysOfWeek[1])
        } else if(dayOfWeek === daysOfWeek[5]){
            setDay1(daysOfWeek[5])
            setDay2(daysOfWeek[6])
            setDay3(daysOfWeek[0])
            setDay4(daysOfWeek[1])
            setDay5(daysOfWeek[2])
        } else if(dayOfWeek === daysOfWeek[6]){
            setDay1(daysOfWeek[6])
            setDay2(daysOfWeek[0])
            setDay3(daysOfWeek[1])
            setDay4(daysOfWeek[2])
            setDay5(daysOfWeek[3])
        }
    }

    useEffect(() => {
        DayShifter()
    }, [])
  
    return (
    <div className='grid grid-cols-5 text-[#1B7E94] text-2xl'>
        <div className='text-center'>
            <p>{day1}</p>
            <div className='flex justify-center'>
                <img src={icon1} alt="icon" />
            </div>
            <p>{temp1}</p>
        </div>
        <div className='text-center'>
            <p>{day2}</p>
            <div className='flex justify-center'>
                <img src={icon2} alt="icon" />
            </div>
            <p>{temp2}</p>
        </div>
        <div className='text-center'>
            <p>{day3}</p>
            <div className='flex justify-center'>
                <img src={icon3} alt="icon" />
            </div>
            <p>{temp3}</p>
        </div>
        <div className='text-center'>
            <p>{day4}</p>
            <div className='flex justify-center'>
                <img src={icon4} alt="icon" />
            </div>
            <p>{temp4}</p>
        </div>
        <div className='text-center'>
            <p>{day5}</p>
            <div className='flex justify-center'>
                <img src={icon5} alt="icon" />
            </div>
            <p>{temp5}</p>
        </div>
    </div>
  )
}

export default Forecast