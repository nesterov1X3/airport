import React from 'react';
import SwitchFlight from './SwitchFlight.jsx'

 const InfoList = () => {
    return (
        <div className="flight-list">
           <SwitchFlight/>
            <ul className="flight-list_info">
                <div className="flight-list_info_item">Terminal</div>
                <div className="flight-list_info_item">Local time</div>
                <div className="flight-list_info_item">Destination</div>
                <div className="flight-list_info_item">Status</div>
                <div className="flight-list_info_item">Airline</div>
                <div className="flight-list_info_item">Flight</div>
            </ul>
            <ul className="info-items">
                <ul className="info-items_flight">
                    <div className="info-items_flight_item">A</div>
                    <div className="info-items_flight_item">0:55</div>
                    <div className="info-items_flight_item">Larnaca</div>
                    <div className="info-items_flight_item">Landed 0:53</div>
                    <div className="info-items_flight_item">Wizz Air</div>
                    <div className="info-items_flight_item" item>W66260</div>
                </ul>
                <ul className="info-items_flight">
                    <div className="info-items_flight_item">A</div>
                    <div className="info-items_flight_item">1:20</div>
                    <div className="info-items_flight_item">Warsaw</div>
                    <div className="info-items_flight_item ">Landed 1:35</div>
                    <div className="info-items_flight_item self-item_2">Lot</div>
                    <div className="info-items_flight_item">LO755</div>
                </ul>
                <ul className="info-items_flight">
                    <div className="info-items_flight_item">D</div>
                    <div className="info-items_flight_item">8:50</div>
                    <div className="info-items_flight_item self-item">Zaporizhhia</div>
                    <div className="info-items_flight_item">Landed 8:43</div>
                    <div className="info-items_flight_item self-item_3">Motor Sich</div>
                    <div className="info-items_flight_item ">M9201</div>
                </ul>
            </ul>
        </div>
    )
};

export default InfoList;