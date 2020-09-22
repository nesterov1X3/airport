import React from 'react';
import './search.scss'


 const Search = () => {
    return (
        <div className="air-form">
            <input className="air-form_input" type="text" placeholder="Airline, destination or flight"/>
                <button className="air-form_btn">SEARCH</button>
    </div>
    )
}
export default Search;