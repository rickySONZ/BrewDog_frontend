import { combineReducers } from "redux";
import breweryReducer from './breweryReducer'
import favoriteReducer from "./favoriteReducer";
import signInReducer from './signInReducer'


const rootReducer = combineReducers({
    breweriesR: breweryReducer,
    signInR: signInReducer,
    favoritesR: favoriteReducer
})

export default rootReducer