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
        case "DELETE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(f => f.id !== action.payload.id)
            }
            default:
                return state
    }
}

export default favoriteReducer