import axios from 'axios'
import React, { useState, useEffect } from 'react'

const CountryProfile = ({ country }) => {
    const languages = Object.values(country.languages)
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]
    const [weather, setWeather] = useState(null)
    const capital = country.capital
    const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
    

    useEffect(() => {
        const api_key = process.env.REACT_APP_WEATHER_API_KEY

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`)
            .then((res) => setWeather(res.data))
        
    }, [capital])

    if (!weather) {
        return null
      }

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            <ul>
                {languages.map(lang =>
                    <li key={lang}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} width="150px" />
            <h3>Weather in {country.capital}</h3>
            <p>Temp: {weather.main.temp} Celsius</p>
            <img src={iconUrl} />
            <p>Wind: {weather.wind.speed} m/s</p>
        </>
    )
}

export default CountryProfile