import React from 'react';
import { connect } from 'react-redux';
import { flightDataSelector } from '../flight.selectors.js'
import SwitchFlight from '../switchFlight/SwitchFlight.jsx';
import { fetchFlightsList } from '../gateway.js'
import * as flightActions from '../flight.actions.js';

import './infoList.scss'

const InfoList = ({flightData}) => {

    const listArrivals = flightData
    console.log(listArrivals)
    return (
        <div className="flight-list">
            <SwitchFlight />
            <ul className="flight-list_info">
                <li className="flight-list_info_item">Terminal</li>
                <li className="flight-list_info_item">Local time</li>
                <li className="flight-list_info_item">Destination</li>
                <li className="flight-list_info_item">Status</li>
                <li className="flight-list_info_item">Airline</li>
                <li className="flight-list_info_item">Flight</li>
            </ul>
            <ul className="info-items">
                <ul className="info-items_flight">
                    <li className="info-items_flight_item">A</li>
                    <li className="info-items_flight_item">0:55</li>
                    <li className="info-items_flight_item">Larnaca</li>
                    <li className="info-items_flight_item">Landed 0:53</li>
                    <li className="info-items_flight_item">Wizz Air</li>
                    <li className="info-items_flight_item">W66260</li>
                </ul>
            </ul>
        </div>
    )

};
const mapState = state => {
    return {
        flightData: flightDataSelector(state)
    }
}

// const mapDispatch = {
//     fetchFlightsList: flightActions.fetchFlightsData
// }
export default connect(mapState)(InfoList);


// getDepartures = () => {
//     fetchFlightsList().then(res =>
//         res.body.departure)
// }

// getArrivals = () => {
//     fetchFlightsList().then(res =>
//         console.log(res.body.arrival))
// }
