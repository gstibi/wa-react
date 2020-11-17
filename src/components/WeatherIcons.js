import React from 'react'

import {ReactComponent as ClearskyDay} from '../icons/weathericon/svg/clearsky_day.svg'
import {ReactComponent as ClearskyNight} from '../icons/weathericon/svg/clearsky_night.svg'
import {ReactComponent as ClearskyPolarTwilight} from '../icons/weathericon/svg/clearsky_polartwilight.svg'


import {ReactComponent as Cloudy} from '../icons/weathericon/svg/cloudy.svg'
import {ReactComponent as FairDay} from '../icons/weathericon/svg/fair_day.svg'
import {ReactComponent as FairNight} from '../icons/weathericon/svg/fair_night.svg'
import {ReactComponent as FairPolarTwilight} from '../icons/weathericon/svg/fair_polartwilight.svg'
import {ReactComponent as Fog} from '../icons/weathericon/svg/fog.svg'

import {ReactComponent as HeavyRain} from '../icons/weathericon/svg/heavyrain.svg'
import {ReactComponent as HeavyRainAndThunder} from '../icons/weathericon/svg/heavyrainandthunder.svg'
import {ReactComponent as HeavyRainShowersDay} from '../icons/weathericon/svg/heavyrainshowers_day.svg'
import {ReactComponent as HeavyRainShowersNight} from '../icons/weathericon/svg/heavyrainshowers_night.svg'
import {ReactComponent as HeavyRainShowersPolarTwilight} from '../icons/weathericon/svg/heavyrainshowers_polartwilight.svg'

import {ReactComponent as HeavyRainShowersAndThunderDay} from '../icons/weathericon/svg/heavyrainshowersandthunder_day.svg'
import {ReactComponent as HeavyRainShowersAndThunderNight} from '../icons/weathericon/svg/heavyrainshowersandthunder_night.svg'
import {ReactComponent as HeavyRainShowersAndThunderPolarTwilight} from '../icons/weathericon/svg/heavyrainshowersandthunder_polartwilight.svg'

import {ReactComponent as HeavySleet} from '../icons/weathericon/svg/heavysleet.svg'
import {ReactComponent as HeavysSleetAndThunder} from '../icons/weathericon/svg/heavysleetandthunder.svg'
import {ReactComponent as HeavySleetShowersDay} from '../icons/weathericon/svg/heavysleetshowers_day.svg'
import {ReactComponent as HeavySleetShowersNight} from '../icons/weathericon/svg/heavysleetshowers_night.svg'
import {ReactComponent as HeavySleetShowersPolarTwilight} from '../icons/weathericon/svg/heavysleetshowers_polartwilight.svg'
import {ReactComponent as HeavySleetShowersAndThunderDay} from '../icons/weathericon/svg/heavysleetshowersandthunder_day.svg'
import {ReactComponent as HeavySleetShowersAndThunderNight} from '../icons/weathericon/svg/heavysleetshowersandthunder_night.svg'
import {ReactComponent as HeavySleetShowersAndThunderPolarTwilight} from '../icons/weathericon/svg/heavysleetshowersandthunder_polartwilight.svg'

import {ReactComponent as HeavySnow} from '../icons/weathericon/svg/heavysnow.svg'
import {ReactComponent as HeavySnowAndThunder} from '../icons/weathericon/svg/heavysnowandthunder.svg'
import {ReactComponent as HeavySnowShowersDay} from '../icons/weathericon/svg/heavysnowshowers_day.svg'
import {ReactComponent as HeavySnowShowersNight} from '../icons/weathericon/svg/heavysnowshowers_night.svg'
import {ReactComponent as HeavySnowShowersPolarTwilight} from '../icons/weathericon/svg/heavysnowshowers_polartwilight.svg'
import {ReactComponent as HeavySnowShowersAndThunderDay} from '../icons/weathericon/svg/heavysnowshowersandthunder_day.svg'
import {ReactComponent as HeavySnowShowersAndThunderNight} from '../icons/weathericon/svg/heavysnowshowersandthunder_night.svg'
import {ReactComponent as HeavySnowShowersAndThunderPolarTwilight} from '../icons/weathericon/svg/heavysnowshowersandthunder_polartwilight.svg'

function Icon(props) {
    var icon;

    switch(props.summary){
        case 'clearsky_day':
            icon = <ClearskyDay/>
            break
        case 'clearsky_night':
            icon = <ClearskyNight/>
            break
        case 'clearsky_polartwilight':
            icon = <ClearskyPolarTwilight/>
            break
        case 'cloudy':
            icon = <ClearskyDay/>
            break
        case 'fair_day':
            icon = <ClearskyNight/>
            break
        case 'fair_night':
            icon = <ClearskyPolarTwilight/>
            break
        case 'fair_polartwilight':
            icon = <ClearskyNight/>
            break
        case 'fog':
            icon = <ClearskyPolarTwilight/>
            break
    }

    return (
        <div>
            {icon}
        </div>
    )
}

export default Icon;