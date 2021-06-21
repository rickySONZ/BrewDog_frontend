export const getFavorites = () => {
    return (dispatch) => {
        fetch(`http://;pca;host:8080/api/v1/user/${localStore.user_id}/favorites`)
        .then(resp => console.log(resp.json()))
    }
}