import moment from 'moment'
const baseUrl = 'https://api.iev.aero/api/flights';

const dateToday = moment().format('DD-MM-yyyy')

export const fetchFlightsList = () => {
    return fetch(`${baseUrl}/${dateToday}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
}

// export const departureFlightsList = () => {
//     return fetch(baseUrl)
//         .then(res => {
//             if (res.ok) {
//                 return res.body.departure.json()
//             }
//         })
// }