import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
import { flightDataSelector } from '../flight.selectors.js';
// import { fetchFlightsList } from '../gateway.js';
import InfoList from '../infoList/InfoList.jsx';
import * as flightActions from '../flight.actions.js';


class Search extends React.Component {
    state = {
        value: ''
    }
    componentDidMount(){
        this.props.fetchFlightsList()
    }
    onChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    search = event => {
        event.preventDefault()
    }

    handleUserSearch = () => {
        this.props.fetchFlightsList(this.state.value)
    }


    render() {
        return (
            <>
                <form className="air-form" onSubmit={this.search}>
                    <input className="air-form_input"
                        type="text"
                        placeholder="Airline, destination or flight"
                        value={this.state.value}
                        onChange={this.onChange} />
                    <button className="air-form_btn" type="submit" onClick={this.handleUserSearch}>SEARCH</button>
                </form>
                <InfoList />
            </>
        )
    }
}
// const mapState = state => {
//     return {
//         flightData: flightDataSelector(state)
//     }
// }

const mapDispatch = {
    fetchFlightsList: flightActions.fetchFlightsData
}
export default connect(null, mapDispatch)(Search);




// getTerminal = () => {
//     console.log(this.takeFlightByNum().then(res=>
//         res))
// }
// getTerm = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.term))
// }

// getLocalTime = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.actual))
// }
// getLocalTime = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.actual))
// }
// getDestination = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.airportFromID))
// }
// getAirline = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.airportFromID.city_en))
// }
// getCodeAir = () => {
// console.log(this.takeFlightByNum().then(res =>
//     res.codeShareData.find( codeShare  => codeShare).codeShare))
// }

// takeFlightByNum = () => {
//     return fetchFlightsList().then(res => {
//         return  (res.body.arrival.find(({ codeShareData }) => 
//           codeShareData.find(({ codeShare }) => codeShare === this.state.value))
//             ||
//             res.body.departure.find(({ codeShareData }) =>
//                 codeShareData.find(({ codeShare }) => codeShare === this.state.value))
//         )
//     })
// }