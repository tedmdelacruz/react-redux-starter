import { RETRIEVE_DATA, RECEIVE_DATA } from './actions'

export function reducer(state = {
    data: '',
    isFetching: false
}, action) {
    switch(action.type) {
        case RETRIEVE_DATA:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        default:
            return state
    }
}
