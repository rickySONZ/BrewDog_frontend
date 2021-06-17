import { combineReducers } from "redux";
import breweryReducer from './breweryReducer'

const rootReducer =  combineReducers({
    breweriesR: breweryReducer
})

export default rootReducer