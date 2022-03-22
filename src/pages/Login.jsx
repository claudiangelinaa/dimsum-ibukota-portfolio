import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { doCheckLogin, doLogin } from '../redux/Actions/authAction'

export default function Login() {
    useEffect(() => {
        if(auth.user_id){
            return navigate('/')
        }else{
            let token = localStorage.getItem('my-tkn')
            dispatch(doCheckLogin(token))
        }

    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnChangeEmail = (e) => {
        let email = e.target.value
        console.log('email:', email);
        setEmail(email)
    }

    const handleOnChangePassword = (e) => {
        let password = e.target.value
        console.log('password:', password);
        setPassword(password)
    }

    const onLogin = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }
        console.log('email:', email, password);
        dispatch(doLogin(data, navigate))

    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: '500px'}}>
                <div className="col-10 px-5 pt-5 pb-5 border">
                    <h1>
                        Login
                    </h1>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleOnChangeEmail(e)} value={email}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => handleOnChangePassword(e)} value={password}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e)=> onLogin(e)}>Login</button>
                        <p className="mt-5">Don't have an account? <Link to="/register">Sign up</Link></p>
                        <p>{auth.message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
