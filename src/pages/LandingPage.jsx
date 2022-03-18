import React from 'react'
import Card from '../components/Card'
import CardMenu from '../components/CardMenu'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <div>
            {/* carousel */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/carousel-1.png" className="d-block w-100" alt="" style={{height: '600px'}}/>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/2.PNG" class="d-block w-100" alt="..." style={{height: '600px'}}/>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/3.PNG" class="d-block w-100" alt="..." style={{height: '600px'}}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div id="promo">
                <div className="container mt-5 text-center" >
                    <h1 className>Promo Menarik</h1>
                    <div className="row" >
                        <Card />
                    </div>
                    <a href="#" class="btn btn-danger mt-3 col-4 mx-auto" role="button">Lihat semua promo</a>
                </div>
            </div>
            <div id="products">
                <div className="container mt-5 mb-2 text-center" >
                    <h1>Menu Favorit</h1>
                    <div className="row">
                        <CardMenu />
                        <a href="#" class="btn btn-danger mt-3 col-2 mx-auto" role="button">Lihat semua menu</a>
                    </div>
                </div>
            </div>
            <div id="instagram">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-5">
                        <h1>Instagram Dimsum Ibukota</h1>
                        </div>
                        <div className="col-2 mt-5">
                            <a href="#" class="btn btn-danger" role="button">Ikuti @dimsum.ibukota</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
