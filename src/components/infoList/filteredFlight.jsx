import React from 'react';
import moment from 'moment';
import './infoList.scss'

const FilteredFlight = ({ flightData, flightFilter }) => {
    const currentDate = moment().format("YYYY-MM-DD");
    const mainFlight = flightData.body.departure.filter(({ codeShareData }) =>
        codeShareData.find(({ codeShare }) => codeShare == flightFilter))
    console.log(mainFlight)
    if (mainFlight.length < 1) {
        return <div className="flight-undefined">No flight</div>
    }
    return (
        mainFlight.filter(date => date.actual?.split('T')[0] === currentDate)
        .map(item =>
            <ul className="info-items" key={item.ID}>
                <ul className="info-items_flight">
                    <li className="info-items_flight_item">{item.term}</li>
                    <li className="info-items_flight_item">{moment(item.timeToStand).format('hh:mm')}</li>
                    <li className="info-items_flight_item">{item["airportToID.city_en"]}</li>
                    <li className="info-items_flight_item">{`${item.status} ${moment(item.timeArrShedule).format('hh:mm')}`}</li>
                    <li className="info-items_flight_item">{`${item.airline.en.name}`}</li>
                    <li className="info-items_flight_item">{item.codeShareData.map(({ codeShare }) => codeShare)}</li>
                </ul>
            </ul>
        )
    )

};

export default FilteredFlight;