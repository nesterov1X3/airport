import React from 'react';
import { Link } from 'react-router-dom';

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
