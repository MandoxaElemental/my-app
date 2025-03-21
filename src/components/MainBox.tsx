'use client'

import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import MainCard from './MainCard'
import Temperature from './Temperature'
import Forecast from './Forecast'
import Recent from './Recent'
import { getWeather } from '@/lib/weather'
import { getLocalStorage, removeFromLocalStorage, saveToRecentStorage, getRecentStorage } from '@/services/localstorage'
import SavedBox from './SavedBox'

const MainBox = () => {
    const [search, setSearch] = useState('Stockton')
    const [city, setCity] = useState('')
    const [initials, setInitials] = useState('')
    const [temp, setTemp] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [status, setStatus] = useState('')
    const [status2, setStatus2] = useState('')
    const [status3, setStatus3] = useState('')
    const [status4, setStatus4] = useState('')
    const [status5, setStatus5] = useState('')
    const [image, setImage] = useState('')
    const [temp2, setTemp2] = useState('')
    const [temp3, setTemp3] = useState('')
    const [temp4, setTemp4] = useState('')
    const [temp5, setTemp5] = useState('')
    const [icon1, setIcon1] = useState('')
    const [icon2, setIcon2] = useState('')
    const [icon3, setIcon3] = useState('')
    const [icon4, setIcon4] = useState('')
    const [icon5, setIcon5] = useState('')
    const [saved, setSaved] = useState('')

    function Icons(){
        function Icon1Func(){
            switch (status) {
            case "Clear":
                setIcon1("./assets/Icons/Weather_Icon_Clear_Day.png");
                setImage("./assets/Day/Weather_Clear_Day.png");
            break;
            case "Rain":
                setIcon1("./assets/Icons/Weather_Icon_Rain.png");
                setImage("./assets/Day/Weather_Rain_Day.png");
            break;
            case "Clouds":
                setIcon1('./assets/Icons/Weather_Icon_Cloudy.png');
                setImage('./assets/Day/Weather_Overcast_Day.png');
            break;
            case "Snow":
                setIcon1('./assets/Icons/Weather_Icon_Snow.png');
                setImage('./assets/Day/Weather_Snow_Day.png');
            break;
            default:
                setIcon1("./assets/Icons/Weather_Icon_Clear_Day.png");
                setImage("/assets/Day/Weather_Clear_Day.png");
            break;
            };
        }
        function Icon2Func(){
            switch (status2) {
            case "Clear":
                setIcon2("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            case "Rain":
                setIcon2("./assets/Icons/Weather_Icon_Rain.png");
            break;
            case "Clouds":
                setIcon2('./assets/Icons/Weather_Icon_Cloudy.png');
            break;
            case "Snow":
                setIcon2('./assets/Icons/Weather_Icon_Snow.png');
            break;
            default:
                setIcon2("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            };
        }
        function Icon3Func(){
            switch (status3) {
            case "Clear":
                setIcon3("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            case "Rain":
                setIcon3("./assets/Icons/Weather_Icon_Rain.png");
            break;
            case "Clouds":
                setIcon3('./assets/Icons/Weather_Icon_Cloudy.png');
            break;
            case "Snow":
                setIcon3('./assets/Icons/Weather_Icon_Snow.png');
            break;
            default:
                setIcon3("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            };
        }
        function Icon4Func(){
            switch (status4) {
            case "Clear":
                setIcon4("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            case "Rain":
                setIcon4("./assets/Icons/Weather_Icon_Rain.png");
            break;
            case "Clouds":
                setIcon4('./assets/Icons/Weather_Icon_Cloudy.png');
            break;
            case "Snow":
                setIcon4('./assets/Icons/Weather_Icon_Snow.png');
            break;
            default:
                setIcon4("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            };
        }
        function Icon5Func(){
            switch (status5) {
            case "Clear":
                setIcon5("./assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            case "Rain":
                setIcon5("./assets/Icons/Weather_Icon_Rain.png");
            break;
            case "Clouds":
                setIcon5('./assets/Icons/Weather_Icon_Cloudy.png');
            break;
            case "Snow":
                setIcon5('./assets/Icons/Weather_Icon_Snow.png');
            break;
            default:
                setIcon5("/assets/Icons/Weather_Icon_Clear_Day.png");
            break;
            };
        }
        Icon1Func()
        Icon2Func()
        Icon3Func()
        Icon4Func()
        Icon5Func()
    }

    const myWeather = async () => {
        const weather = await getWeather(search);
        saveToRecentStorage(search)
        console.log(weather)
        setCity(weather.city.name)
        setInitials(weather.city.country)
        setTemp(Math.round((weather.list[0].main.temp * 9/5) - 459.67) + "°")
        setStatus(weather.list[0].weather[0].main)
        setStatus2(weather.list[1].weather[0].main)
        setStatus3(weather.list[2].weather[0].main)
        setStatus4(weather.list[3].weather[0].main)
        setStatus5(weather.list[4].weather[0].main)
        Icons()
        setMax(Math.round((weather.list[0].main.temp_max * 9/5) - 459.67) + "°F")
        setMin(Math.round((weather.list[0].main.temp_min * 9/5) - 459.67) + "°F")
        setTemp2(Math.round((weather.list[1].main.temp * 9/5) - 459.67) + "°F")
        setTemp3(Math.round((weather.list[2].main.temp * 9/5) - 459.67) + "°F")
        setTemp4(Math.round((weather.list[3].main.temp * 9/5) - 459.67) + "°F")
        setTemp5(Math.round((weather.list[4].main.temp * 9/5) - 459.67) + "°F")
        RecentSearches()
        Star()

    }

    const RecentSearches = () => {


    }

    const SearchCountry = (name: string) => {
        console.log(name)
        setSearch(name)
        console.log(search)
        myWeather()
    }

    useEffect(() => {
        myWeather()
    }, [])
    
    useEffect(() => {
        checkTimeAndAct()
    }, [])
    

    useEffect(() => {
        Icons()
        Star()
        getRecentStorage()
    }, [status, status2, status3, status4, status5, saved])

    const Star = () => {
        const list = getLocalStorage()
        if (!list.includes(city)) {
            setSaved("/assets/star.svg")
        } else {
            setSaved("/assets/star-fill.svg")
        }
    }

    function checkTimeAndAct() {
        const currentHour = new Date().getHours();
    
        if (6 <= currentHour && currentHour < 12) {
            console.log("Good morning!");
        } else if (12 <= currentHour && currentHour < 18) {
            console.log("Good afternoon!");
        } else if (18 <= currentHour && currentHour < 24) {
            console.log("Good evening!");
        } else {
            console.log("Good night!");
        }
    }
    

  return (
    <div className='bg-[#70707082] w-auto h-auto rounded-xl p-5'>
        <div className='flex mx-10'>
        <Input onChange={ (event) => setSearch(event.target.value)} className='bg-white mx-5' placeholder='Enter Country'/>
        <Button onClick={() => SearchCountry(search)} className='bg-[#1B7E94]'>Search</Button>
        </div>
    <div className="min-h-[100%] grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-5">
    <div className="md:row-span-2">
        <MainCard title='Temperature' weatherComponent={<Temperature city={city} initials={initials} saved={saved} currentTemp={temp} image={image} status={status} max={max} min={min}/>}/>
    </div>
    <div className="md:col-span-2">
        <MainCard title='5-Day Forecast' weatherComponent={<Forecast icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} icon5={icon5} temp1={temp} temp2={temp2} temp3={temp3} temp4={temp4} temp5={temp5}/>}/>
    </div>
    <div className="md:col-start-2 md:row-start-2">
        <MainCard title='Recent Searches' weatherComponent={<Recent recent={
            getRecentStorage().map((names: string, idx: number) => {
                return(
                    <div key={idx} className='flex justify-between'>
                    <p className='text-xl font-bold' onClick={() => SearchCountry(names)}>{names}</p>
                    </div>
                )
            })
        }/>}/>
    </div>
    <div className="md:col-start-3 md:row-start-2">
        <MainCard title='Saved' weatherComponent={<SavedBox saved={
            getLocalStorage().map((names: string, idx: number) => {
                return(
                    <div key={idx} className='flex justify-between'>
                    <p className='text-xl font-bold' onClick={() => SearchCountry(names)}>{names}</p>
                    <img onClick={() => removeFromLocalStorage(names)} src="/assets/star-fill.svg" alt="star" />
                    </div>
                )
            })
        }/>}/>
    </div>
</div>
    
    </div>
  )
}

export default MainBox