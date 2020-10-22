import { createSelector } from 'reselect';

export const flightDataSelector = state => {
    return state.flightData
}


export const flightFilterSelector = state => {
    return state.flight
}

// export const filteredFlightListSelector = createSelector([
//         flightDataSelector,
//         flightFilterSelector
//     ],
//     (flightData, flight) => {
//         return flightData.body.departure.find(({ codeShareData }) =>
//             codeShareData.filter(({ codeShare }) => codeShare === flight))
//     })