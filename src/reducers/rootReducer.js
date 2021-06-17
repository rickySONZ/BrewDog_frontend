import { combineReducers } from "redux";
import breweryReducer from './breweryReducer'
import signInReducer from './signInReducer'

const rootReducer =  combineReducers({
    breweriesR: breweryReducer,
    signInR: signInReducer
})

export default rootReducer