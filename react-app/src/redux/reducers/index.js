import {combineReducers} from 'redux'
const loggedReducer = (state=false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !state
        default:
            return state
    }
}

export const allReducers = combineReducers({
    isLogged: loggedReducer
})