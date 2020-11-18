import React, { useState, useEffect } from 'react'
import WeatherState from './WeatherState'

function Forecast() {

    const [weather, setWeather] = useState(
        [
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
            {
                time: 0,
                temperature: 0,
                summary: 'cloudy'
            },
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
        const valuesArr = []

        for(let i = 0; i < 16; i++){
            const time = new Date(weatherData.properties.timeseries[i].time)
            const values = {}
            values.time = [
                (time.getHours() < 10 ? '0':'') + time.getHours(),
                (time.getMinutes() < 10 ? '0':'') + time.getMinutes(),
            ]
            values.temperature = weatherData.properties.timeseries[i].data.instant.details.air_temperature
            values.summary = weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code
            valuesArr.push(values)
        }

        setWeather(valuesArr)
    }
    
    return (
        <div className='row flex-nowrap forecast_row'>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[0]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[1]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[2]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[3]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[4]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[5]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[6]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[7]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[8]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[9]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[10]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[11]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[12]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[13]}
                />
            </div>
            <div className="col-3-md">
                <WeatherState
                    weather={weather[14]}
                />
            </div>
        </div>
    );
}

export default Forecast;
