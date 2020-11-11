import React, { useState, useEffect } from 'react'

function CurrentWeather() {

    const [weather, setWeather] = useState({
        time: 0,
        temperature: 0,
        summary: 'cloudy'
    })

    useEffect(() => {
        fetchWeather()
    }, [])

    const fetchWeather = async () => {
        const data = await fetch(
            'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58 '
        )
        const weatherData = await data.json()

        const time = new Date(weatherData.properties.timeseries[0].time)

        const items = {}
        items.time = [time.getHours()]
        items.temperature = weatherData.properties.timeseries[0].data.instant.details.air_temperature
        items.summary = weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code

        items.time = new Date(items.time)
        console.log(items.time.getHours())
        setWeather(items)
    }

    return (
        <div>
            <h1>Current Weather</h1>
            <p>{`Forecast time ${weather.time} : ${weather.time} : ${weather.time}`}</p>
            <p>{`Current temperature is ${weather.temperature}`}</p>
            <p>{`Current summary is ${weather.summary}`}</p>
        </div>
    );
}

export default CurrentWeather;
