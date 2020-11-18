import React from 'react'
import Icon from './WeatherIcons'

function WeatherState(props) {
    return (
        <div className="weather_state">
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
                summary={props.summary}
            />
        </div>
    )
}

function WeatherTemperature(props) {
    return (
        <div>
            <p>{props.temperature} °C</p>
        </div>
    )
}

export default WeatherState;