import React, { useState, useEffect } from 'react'
import WeatherState from './WeatherState'

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
            'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=48.72&lon=21.23'
        )
        const weatherData = await data.json()
        console.log(weatherData)

        const time = new Date(weatherData.properties.timeseries[4].time)
        const values = {}
        values.time = [
            (time.getHours() < 10 ? '0':'') + time.getHours(),
            (time.getMinutes() < 10 ? '0':'') + time.getMinutes(),
            (time.getSeconds() < 10 ? '0':'') + time.getSeconds(),
        ]
        values.temperature = weatherData.properties.timeseries[4].data.instant.details.air_temperature
        values.summary = weatherData.properties.timeseries[4].data.next_1_hours.summary.symbol_code

        //items.time = new Date(items.time)
        setWeather(values)
    }

    return (
        <div>
            <h1>Current Weather</h1>
            <p>{`Forecast time ${weather.time[0]} : ${weather.time[1]} : ${weather.time[2]}`}</p>
            <p>{`Current temperature is ${weather.temperature}`}</p>
            <p>{`Current summary is ${weather.summary}`}</p>
            <WeatherState
                weather={weather}
            />
        </div>
    );
}

export default CurrentWeather;
