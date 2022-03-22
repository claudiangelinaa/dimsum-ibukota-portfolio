import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { doCheckLogin, doLogout } from '../redux/Actions/authAction'

export default function Navbar() {
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(auth.user_id){
            return navigate('/')
        }else{
            let token = localStorage.getItem('my-tkn')
            // console.log(token);
            if(token){
                dispatch(doCheckLogin(token))
            }
        }
    }, [])

    const onLogout = () => {
        dispatch(doLogout())
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light h-100">
            <div className="container">
                <a className="navbar-brand mx-5" href="/">Dimsum Ibukota</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#promo">Promo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </a>
                        </li>
                        
                        {
                            auth.user_id?
                                <>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        <FontAwesomeIcon icon={faUser}/> Hello, {auth.email} 
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" onClick={onLogout}>
                                        /Logout
                                    </a>
                                    </li>
                                </>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    <FontAwesomeIcon icon={faUser}/>
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
