import { FLIGHT_LIST_ACTIONS, FLIGHT_LIST_ITEM_ACTIONS } from './flight.actions.js';

const initialState = {
    flightData: null
}

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHT_LIST_ACTIONS:
            return {
                ...state,
                flightData: action.payload.flightData
            }

        default:
            return state
    }
}