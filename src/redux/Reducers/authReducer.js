let initialState = {
    loading: false,
    token: null,
    message: null,
    user_id: 0,
    email: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'REGISTER_SUCCESS':
            return {...state, message: action.payload}
        case 'REGISTER_ERROR':
            return {...state, message: action.payload}
        case 'LOGIN_SUCCESS':
            return {...state, message: action.payload.message, token: action.payload.token, user_id: action.payload.user_id, email: action.payload.email}
        case 'LOGIN_ERROR':
            return {...state, message: action.payload}
        case 'CHECK_USER_LOGIN':
            return {...state, token: action.payload.token, email: action.payload.email, user_id: action.payload.user_id}
        case 'LOGOUT':
            return initialState
        default:
            return state
    }
}

export default authReducer;