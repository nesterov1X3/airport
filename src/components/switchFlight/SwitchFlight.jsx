import React from 'react';
import './switchFlight.scss'

const SwitchFlight = () => {
    return (
        <>
            <button className="flight-list_departures flight-list_btn">DEPARTURES</button>
            <button className="flight-list_arrivals flight-list_btn">ARRIVALS</button>
        </>
    )
};
export default SwitchFlight;