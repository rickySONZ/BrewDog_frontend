export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://localhost:8080/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
        .then(resp=> resp.json())
        .then(data => {
            if (data.message){
                console.log(data.errors)
                alert(data.error)
            } else {
                console.log(data)
                dispatch(loginUser(data.user))
                localStorage.setItem("token", data.token)
                localStorage.setItem("user_id", data.user.id)
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
// Used to fetch user upon login
export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.status !== 200){
                    console.log(data.error)
                    alert(data.error)
                } else {
                    dispatch(loginUser(data.user))
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("user_id", data.user.id)
                    
                }
            
        })
    }
}

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token
        if (token) {
            return fetch("http://localhost:8080/api/v1/profile", {
                method: "GET",
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.error){
                    localStorage.removeItem("token")
                    localStorage.removeItem("user_id")
                } else {
                    dispatch(loginUser(data.user))
                    localStorage.setItem("user_id", data.user.id)
                }
            })
        }
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})
