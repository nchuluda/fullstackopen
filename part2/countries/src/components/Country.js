import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CountryProfile from "./CountryProfile"

const Country = ({ countriesToShow, showCountry }) => {
    // const [weather, setWeather] = useState(null)
    

    // useEffect(() => {
    //     const api_key = process.env.REACT_APP_API_KEY

    //     axios
    //         .get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
    // })

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many results. Please use a different filter
            </div>
        )
    }

    if (countriesToShow.length === 1) {
        return (
                <CountryProfile country={countriesToShow[0]} />
        )
    }

    return (
        <>
        {countriesToShow.map(country => 
            <div key={country.name.official}>
                {country.name.common}
                <button onClick={() => showCountry(country.name.common)}>show</button>
            </div>
        )}
        </>
    )
}

export default Country