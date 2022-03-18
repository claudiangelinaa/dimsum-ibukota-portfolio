import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: '500px'}}>
                <div className="col-10 px-5 pt-5 pb-5 border">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                        <p className="mt-5">Already have an account? <Link to="/login">Log in</Link></p>
                        </form>
                </div>
            </div>
        </div>
    )
}
