import axios from 'axios'

export const RETRIEVE_DATA = 'RETRIEVE_DATA'
function retrieveData() {
    return {
        type: RETRIEVE_DATA
    }
}

export const RECEIVE_DATA = 'RECEIVE_DATA'
function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data
    }
}

export const FETCH_DATA = 'FETCH_DATA'
export function fetchData() {
    return dispatch => {
        dispatch(retrieveData())
        return axios.get('/data.json')
            .then(response => {
                dispatch(receiveData(response.data))
            })
    }
}

