import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBag} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light h-100">
            <div class="container">
                <a class="navbar-brand mx-5" href="/">Dimsum Ibukota</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#promo">Promo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
