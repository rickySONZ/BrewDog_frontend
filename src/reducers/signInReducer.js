const initialState={
    current: {}
}
const signInReducer = (state= initialState, action) => {
    switch (action.type){
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
            default:
                return state;
    }
}

export default signInReducer