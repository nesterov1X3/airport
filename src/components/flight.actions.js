import { fetchFlightsList } from './gateway.js';

export const FLIGHT_LIST_ACTIONS = 'FLIGHT_LIST_ACTIONS';
export const FLIGHT_LIST_ITEM_ACTIONS = 'FLIGHT_LIST_ITEM_ACTIONS';


export const flightList = flightData => {
    return {
        type: FLIGHT_LIST_ACTIONS,
        payload: {
            flightData
        }
    }
}

export const fetchFlightsData = () => {
    return function(dispatch) {
        fetchFlightsList()
            .then(flightData => {
                dispatch(flightList(flightData))
            });
    }
}