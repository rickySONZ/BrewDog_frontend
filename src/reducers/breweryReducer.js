
const initialState = {
    breweries: [],
    loading: false,
    searchedBreweries: []
}

const breweryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BREWERIES":
            return {
                ...state,
                breweries: [...action.payload],
                loading: false
            }
        case "GET_SEARCHED_BREWERIES":
            return {
                ...state,
                searchedBreweries: [...action.payload],
                loading: false
            }
        case "CLEAR_SEARCHED_BREWERIES":
            return {
                ...state,
                searchedBreweries: {},
                loading: false
            }

        default:
            return state
    }
}

export default breweryReducer