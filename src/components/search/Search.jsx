import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
import { flightDataSelector, flightFilterSelector } from '../flight.selectors.js';
import PropTypes from 'prop-types';
import SearchForm from '../searchForm/SearchForm.jsx'

import InfoList from '../infoList/InfoList.jsx';
import * as flightActions from '../flight.actions.js';


class Search extends React.Component {


    componentDidMount() {
        this.props.fetchFlightsList()
    }

    onChange = event => {
        const flilterTextFlight = event.target.value;
        this.props.flightFilterOne(flilterTextFlight)
    }

    search = event => {
        event.preventDefault()
    }

    handleUserSearch = (event) => {
        this.props.fetchFlightsList(event.target.value)
    }


    render() {
        const { flightData, flightFilter } = this.props
        if (!flightData) {
            return null
        }
        return (
            <SearchForm
                flightData={flightData}
                flightFilter={flightFilter}
                onChange={this.onChange}
                handleUserSearch={this.handleUserSearch}
                search={this.search}
            />
        )
    }
}
const mapState = state => {
    return {
        flightData: flightDataSelector(state),
        flightFilter: flightFilterSelector(state),
    }
}

const mapDispatch = {
    fetchFlightsList: flightActions.fetchFlightsData,
    flightFilterOne: flightActions.flightFilter
}

InfoList.propTypes = {
    flightData: PropTypes.shape()
}
InfoList.defaultValue = {
    flightData: null
}
export default connect(mapState, mapDispatch)(Search);
