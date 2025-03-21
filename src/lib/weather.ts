import { APIKEY } from "@/services/environtments";

//https://api.openweathermap.org/data/2.5/forecast?q=stockton&appid=bc9fbb7eaadc368de3ca8a6e14057080

const getWeather = async (country : string) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${APIKEY}`);
    const data = await promise.json();
    return data
    
}
export {getWeather}