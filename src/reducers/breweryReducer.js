
const initialState = {
    breweries: [],
    loading: false,
}

const breweryReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_BREWERIES":
            return {
                ...state,
                 breweries: [ ...action.payload],
                loading: false
            }
            
            default:
                return state
    }
}

export default breweryReducer