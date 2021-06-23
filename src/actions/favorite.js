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
        })
    }
}

export const deleteFavorite = (id) => {
    
    return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/${localStorage.user_id}/favorites/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({id})

        })
        .then(resp => resp.json())
        .then(favorite => {
            console.log(favorite)
            dispatch({
                type: "DELETE_FAVORITE",
                payload: favorite
            })

        })

    }
}

export const clearFavoritesOnLogout = () => {
    return(dispatch) => {
        dispatch({
            type: "CLEAR_FAVORITES"
        })
    }
}