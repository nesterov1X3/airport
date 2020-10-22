import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Arrival from '../infoList/arrival.jsx'
import Departure from '../infoList/departure.jsx'
import FilteredFlight from '../infoList/filteredFlight.jsx'
import InfoList from '../infoList/InfoList.jsx'
import './searchForm.scss';

const SearchForm = ({ flightData, search, handleUserSearch, onChange, flightFilter }) => {
    return (
        <BrowserRouter>
            <form className="air-form" onSubmit={search}>
            <Link to="/filteredFlight">
                <input className="air-form_input"
                    type="text"
                    placeholder="Airline, destination or flight"
                    value={flightFilter}
                    onChange={onChange} />
                
                    <button className="air-form_btn" type="submit" onClick={handleUserSearch}>SEARCH</button>
                </Link>

                <div className="flight-list">
                    <Route path="/"> <InfoList flightData={flightData} /></Route>
                    <Route path="/arrival"><Arrival flightData={flightData} /></Route>
                    <Route path="/departure"><Departure flightData={flightData} /></Route>
                    <Route path="/filteredFlight"><FilteredFlight
                     flightData={flightData}
                     flightFilter={flightFilter}
                     /></Route>
                </div>
            </form>
        </BrowserRouter>
    )
};
export default SearchForm;