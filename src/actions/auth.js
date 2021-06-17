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
            } else {
                localStorage.setItem("token", data.token)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

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
                if (data.message){
                    console.log(data.errors)
                } else {
                    localStorage.setItem("token", data.token)
                    dispatch(loginUser(data.user))
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
                if (data.message){
                    localStorage.removeItem("token")
                } else {
                    dispatch(loginUser(data.user))
                }
            })
        }
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})