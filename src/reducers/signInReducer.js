const initialState={
    current: {}
}
const signInReducer = (state= initialState, action) => {
    switch (action.type){
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}

        case 'LOGOUT_USER':
            return {...state, searchedBreweries: {}, currentUser: {}, favorites: {}}

        case 'USER_ERROR':
            return {...state, error: action.payload}

        case 'REMOVE_ERROR':
            return {...state, error: {}}
            default:
                return state;
    }
}

export default signInReducer