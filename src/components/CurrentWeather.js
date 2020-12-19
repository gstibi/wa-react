import React, { useState, useEffect } from 'react'
import WeatherState from './WeatherState'
import {AnimatePresence, motion} from 'framer-motion'

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};
  
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

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
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <WeatherState
                weather={weather[0]}
            />
        </motion.div>
    );
}

export default CurrentWeather;
