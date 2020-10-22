import { FLIGHT_LIST_ACTIONS, FLIGHT_FILTER } from './flight.actions.js';

const initialState = {
    flightData: null,
    flight: '',
}

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHT_LIST_ACTIONS:
            return {
                ...state,
                flightData: action.payload.flightData
            }
        case FLIGHT_FILTER:
            return {
                ...state,
                flight: action.payload.flight
            }

        default:
            return state
    }
}