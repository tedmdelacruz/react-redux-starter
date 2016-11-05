import update from 'immutability-helper'
import { RETRIEVE_DATA, RECEIVE_DATA } from './actions'

const initialState = {
    data: '',
    isLoading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RETRIEVE_DATA:
            return update(state, {
                isLoading: { $set: true }
            })
        case RECEIVE_DATA:
            return update(state, {
                isLoading: { $set: false },
                data: { $set: action.data }
            })
        default:
            return state
    }
}
