import React from 'react';
import './switchFlight.scss';
import { fetchFlightsList } from '../gateway.js'

class SwitchFlight extends React.Component {
    
    render() {
        return (
            <>
                <button className="flight-list_departures flight-list_btn">DEPARTURES</button>
                <button className="flight-list_arrivals flight-list_btn">ARRIVALS</button>
            </>
        )
    }
};
export default SwitchFlight;