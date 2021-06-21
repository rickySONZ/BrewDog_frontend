const initialState = {
    breweries: [],
    loading: false,
    searchedBreweries: [],
    favorites: []
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_FAVORITES":
            return {
                ...state,
                favorites: [...action.payload],
                loading: false
            }
            default:
                return state
    }
}

export default favoriteReducer