import { UPDATE_AGE } from '../types/person'

const person = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_AGE:
            return {
                ...state,
                age: action.data.age,
            }
        default:
            return state
    }
}

export default person