import React from 'react'

function WeatherState(props) {
    return (
        <div className="App">
            <h1>WeatherState</h1>
            <WeatherTime
                time={props.weather.time}
            />
        </div>
    );
}

export default WeatherState;

function WeatherTime(props) {
    console.log(props)
    return (
        <div>
            <h6>{props.time}</h6>
        </div>
    )
}