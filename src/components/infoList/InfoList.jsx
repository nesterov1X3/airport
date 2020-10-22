import React from 'react';
import { connect } from 'react-redux';
import { flightDataSelector } from '../flight.selectors.js'
import { Link } from 'react-router-dom';
import * as flightActions from '../flight.actions.js';
// import Arrival from './arrival.jsx'
// import Departure from './departure.jsx'
import './infoList.scss'

class InfoList extends React.Component {
    state = {
        deffault: 'acaccf'
    }
    setDepColor() {
       this.setState({
        departure: this.state.deffault = '#00f',
        arrival:   this.state.deffault = '#acaccf'
       })
    }
    setArrColor() {
        this.setState({
         departure: this.state.deffault = '#acaccf',
         arrival:   this.state.deffault = '#00f'
        })
     }


    render() {
        return (
            <div >
                <Link to="/departure">
                    <button className="flight-list_departures flight-list_btn" style={{background: this.state.departure }} onClick={() => this.setDepColor()}>DEPARTURES</button>
                </Link>
                <Link to="/arrival">
                    <button className="flight-list_arrivals flight-list_btn" style={{background: this.state.arrival }} onClick={() => this.setArrColor()}>ARRIVALS</button>
                </Link>
                <ul className="flight-list_info">
                    <li className="flight-list_info_item">Terminal</li>
                    <li className="flight-list_info_item">Local time</li>
                    <li className="flight-list_info_item">Destination</li>
                    <li className="flight-list_info_item">Status</li>
                    <li className="flight-list_info_item">Airline</li>
                    <li className="flight-list_info_item">Flight</li>
                </ul>
            </div>
        )

    }
};

export default InfoList;




// {flightData.body.arrival.map(item =>
//     <ul className="info-items">
//         <ul className="info-items_flight">
//             <li className="info-items_flight_item">{item.term}</li>
//             <li className="info-items_flight_item">{moment(item.timeArrShedule).format('hh:mm')}</li>
//             <li className="info-items_flight_item">{item["airportFromID.city_en"]}</li>
//             <li className="info-items_flight_item">{`${item.status} ${moment(item.timeArrShedule).format('hh:mm')}`}</li>
//             <li className="info-items_flight_item">{`${item.airline.en.name}`}</li>
//             <li className="info-items_flight_item">{item.codeShareData.map(({ codeShare }) => codeShare)}</li>
//         </ul>
//     </ul>
// )}
// getArrival() {
    //     return (
    //         this.props.flightData.body.arrival.map(item =>
    //             <ul className="info-items">
    //                 <ul className="info-items_flight">
    //                     <li className="info-items_flight_item">{item.term}</li>
    //                     <li className="info-items_flight_item">{moment(item.timeArrShedule).format('hh:mm')}</li>
    //                     <li className="info-items_flight_item">{item["airportFromID.city_en"]}</li>
    //                     <li className="info-items_flight_item">{`${item.status} ${moment(item.timeArrShedule).format('hh:mm')}`}</li>
    //                     <li className="info-items_flight_item">{`${item.airline.en.name}`}</li>
    //                     <li className="info-items_flight_item">{item.codeShareData.map(({ codeShare }) => codeShare)}</li>
    //                 </ul>
    //             </ul>
    //         )
    //     )
    // }
    // getDeparture() {
    //     return (
    //         this.props.flightData.body.departure.map(item =>
    //             <ul className="info-items">
    //                 <ul className="info-items_flight">
    //                     <li className="info-items_flight_item">{item.term}</li>
    //                     <li className="info-items_flight_item">{moment(item.timeArrShedule).format('hh:mm')}</li>
    //                     <li className="info-items_flight_item">{item["airportFromID.city_en"]}</li>
    //                     <li className="info-items_flight_item">{`${item.status} ${moment(item.timeArrShedule).format('hh:mm')}`}</li>
    //                     <li className="info-items_flight_item">{`${item.airline.en.name}`}</li>
    //                     <li className="info-items_flight_item">{item.codeShareData.map(({ codeShare }) => codeShare)}</li>
    //                 </ul>
    //             </ul>
    //         )
    //     )
    // }