import { combineReducers } from "redux";
import breweryReducer from './breweryReducer'

const rootReducer =  combineReducers({
    breweries: breweryReducer
})

export default rootReducer