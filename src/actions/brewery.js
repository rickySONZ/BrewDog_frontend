// Initially used upon app loading to have all breweries in DB loaded to store
export const getBreweries = () => {
    return (dispatch) => {
        fetch("http://brewdog-backend.herokuapp.com/api/v1/breweries")
        .then(resp=> resp.json())
        // .then(data => console.log(data))
        .then(breweries => {
            dispatch({
                type: "GET_BREWERIES",
                payload: breweries
            })
        })
    }
}
//Dispatches searched breweries to breweries reducer
export const getSearchedBreweries = (searchedBreweries) => {
    return(dispatch) => {
            dispatch({
                type: "GET_SEARCHED_BREWERIES",
                payload: searchedBreweries
            })}
        }

export const clearSearchedBreweries = () => {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_SEARCHED_BREWERIES"
        })
    }
}