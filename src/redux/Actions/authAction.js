import axios from "axios"

export const doCheckLogin = (token) => {
    return(dispatch) => {
        axios.get('http://localhost:4000/authentic-system/check-user-login',{
            headers: {
                'authorization': `${token}`
            }}
        )
        .then((res) => {
            console.log('tes',res);
            if(res.data.message === 'Token valid'){
                dispatch({
                    type: 'CHECK_USER_LOGIN',
                    payload: {
                        message: res.data.message,
                        email: res.data.data.email,
                        user_id: res.data.data.id
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const doLogin = (data, navigate) => {
    return(dispatch) => {
        axios.post('http://localhost:4000/authentic-system/login', data)
        .then((res) => {
            console.log(res);
            if(res.data.error === false){
                localStorage.setItem('my-tkn', res.data.token)
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        message: res.data.message,
                        token: res.data.token,
                        user_id: res.data.user_id,
                        email: res.data.email
                    }
                })
                return navigate("/products")
            }else{
                dispatch({
                    type: 'LOGIN_ERROR',
                    payload: res.data.message
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const doLogout = () => {
    return(dispatch) => {
        localStorage.removeItem('my-tkn')
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const doRegister = (data, navigate) => {
    return(dispatch) => {
        axios.post('http://localhost:4000/authentic-system/register', data)
        .then((res) => {
            console.log(res);
            if(res.data.error === false){
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: res.data.message
                })
                return navigate('/')
            }else{
                dispatch({
                    type: 'REGISTER_ERROR',
                    payload: res.data.message
                })
            }
        })
        .catch(err=> {
            console.log(err);
        })
    }
}