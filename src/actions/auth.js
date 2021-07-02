import { Snackbar } from "@material-ui/core"
import { render } from "@testing-library/react"
import Alert from '@material-ui/lab/Alert';


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
            if (data.status !== 200){
                if(data.username){
                    console.log(data.username)
                    dispatch(authError(`Username ${data.username}`))
                
                }
                else if (data.email){
                    console.log(data.email)
                    dispatch(authError(`Email ${data.email}`)) 
                }
            } else {
                
                dispatch(loginUser(data.user))
                localStorage.setItem("token", data.token)
                localStorage.setItem("user_id", data.user.id)
            }
        })
        .then(localStorage.removeItem("error"))
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
                if (data.status !== 200){
                    if (data.username){
                        dispatch(authError(`Username ${data.username}`))
                    } else if (data.password){
                        dispatch(authError(`Username ${data.password}`))
                    }
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

export const authError = (error) => ({
    type: 'USER_ERROR',
    payload: error
})

export const removeError = () => ({
    type: 'REMOVE_ERROR'
})