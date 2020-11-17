import React from 'react'
import Icon from './WeatherIcons'

function WeatherState(props) {
    return (
        <div className="App">
            <h1>WeatherState</h1>
            <WeatherTime
                time={props.weather.time}
            />
            <WeatherIcon
                summary={props.weather.summary}
            />
            <WeatherTemperature
                temperature={props.weather.temperature}
            />
        </div>
    );
}

export default WeatherState;

function WeatherTime(props) {
    return (
        <div>
            <p>{props.time[0]}:{props.time[1]}</p>
        </div>
    )
}

function WeatherIcon(props) {
    return (
        <div>
            <Icon
                summary='clearsky_night'
            />
        </div>
    )
}

function WeatherTemperature(props) {
    console.log(props)
    return (
        <div>
            <p>{props.temperature}</p>
        </div>
    )
}