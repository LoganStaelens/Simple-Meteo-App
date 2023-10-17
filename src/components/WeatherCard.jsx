import React, { useEffect, useState } from 'react'
import axios from "axios";

import './Card.css'


const WeatherCard = ({city}) => {

    const [weather, setWeather] = useState(undefined);
    const [errorState, setErrorState] = useState(200);
    useEffect(() => {
        setErrorState(200);
        callWeatherForecast(city);
    }, [city]);

    async function callWeatherForecast(city) {
        const req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a72beaec183eebd53c0699ebdf3981f&units=metric&lang=fr`;
        axios.get(req).then(async (res) => {
            res.data.iconLink = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
            console.log(res.data);
            setWeather(undefined);
            await new Promise(res => setTimeout(res, 1000));
            setWeather(res.data);
            
        }).catch((e) => {
            setErrorState(404);
        });
    }

    if(errorState === 404) {
        return(
            <div className='card-base'>
                <h1>Erreur 404</h1>
            </div>
        );
    }
    else if(errorState !== 404 && weather) {
        return( 
            <div className='card-base'>
                <h1>{city}</h1>
                <img src={weather?.iconLink} alt="WeatherDescIcon" />
                <p>Meteo: {weather?.weather[0].description}</p>
                <p>Temperature: {weather?.main.temp}°C</p>
            </div>
        )
    }
    else 

        return (
            <div className='card-base'>
                Loading...
            </div>
    
        );
}
 
export default WeatherCard;