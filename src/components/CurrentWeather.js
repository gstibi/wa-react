import React, { useState, useEffect } from 'react'
import WeatherState from './WeatherState'

function CurrentWeather() {

    const [weather, setWeather] = useState(
        [
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            }
        ]
    )

    useEffect(() => {
        fetchWeather()
    }, [])

    const fetchWeather = async () => {
        const data = await fetch(
            'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=48.72&lon=21.23'
        )
        const weatherData = await data.json()

        const time = new Date(weatherData.properties.timeseries[0].time)
        const values = {}
        values.time = [
            (time.getHours() < 10 ? '0':'') + time.getHours(),
            (time.getMinutes() < 10 ? '0':'') + time.getMinutes(),
        ]
        values.temperature = weatherData.properties.timeseries[0].data.instant.details.air_temperature
        values.summary = weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code

        setWeather([values])
    }

    return (
        <div>
            <WeatherState
                weather={weather[0]}
            />
        </div>
    );
}

export default CurrentWeather;
