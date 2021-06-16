export const getBreweries = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/api/v1/breweries")
        .then(resp=> console.log(resp.json()))
    }
}