import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { doRegister } from '../redux/Actions/authAction'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
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

    const handleOnChangeName = (e) => {
        let name = e.target.value
        console.log('name:', name);
        setName(name)
    }

    const onRegister = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
            name: name
        }
        console.log('email,password,name:', email, password, name);
        dispatch(doRegister(data, navigate))

    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: '500px'}}>
                <div className="col-10 px-5 pt-5 pb-5 border">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleOnChangeEmail(e)}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => handleOnChangePassword(e)}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => handleOnChangeName(e)}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={onRegister}>Register</button>
                        <p className="mt-5">Already have an account? <Link to="/login">Log in</Link></p>
                        <p>{auth.message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
