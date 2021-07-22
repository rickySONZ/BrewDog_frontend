const initialState = {
    breweries: [],
    loading: false,
    searchedBreweries: [],
    favorites: []
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case "CLEAR_FAVORITES":
            return {
                ...state,
                favorites: {}
            }

        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}

export default favoriteReducer