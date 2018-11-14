import { UPDATE_AGE } from '../types/person'

function personAction(data) {
    return {
        type: UPDATE_AGE,
        data
    }
}

export const ageChange = (age = 20) => {
    return personAction({ age: age })
}