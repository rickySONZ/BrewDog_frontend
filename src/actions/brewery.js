
export const getBreweries = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/api/v1/breweries")
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

export const getSearchedBreweries = (searchedBreweries) => {
    return(dispatch) => {
            dispatch({
                type: "GET_SEARCHED_BREWERIES",
                payload: searchedBreweries
            })}
        }
    //     (searchedBreweries => {dispatch({
    //     type: "GET_SEARCHED_BREWERIES",
    //     payload: searchedBreweries
    // })}
    //     )}

