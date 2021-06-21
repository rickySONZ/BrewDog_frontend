export const getFavorites = () => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/${localStorage.user_id}/favorites`)
        .then(resp => resp.json())
        .then(favorites =>{
            console.log(favorites)
            dispatch({
                type: 'GET_FAVORITES',
                payload: favorites
            })
        }
    )
    }
}