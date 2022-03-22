import React from 'react'

export default function Card() {
    return (
        <>
            <div className="col-4">
                <div className="card">
                    <img src="/images/siomay-udang.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Siomay Udang</h5>
                        <p className="card-text"><del>Rp.2800/pc</del>Rp. 2.500/pc</p>
                        <a href="#" className="btn btn-warning">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
            <div className="card">
                    <img src="/images/eggball.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Egg Ball</h5>
                        <p className="card-text"><del>Rp.2500/pc</del> Rp. 2.300/pc</p>
                        <a href="#" className="btn btn-warning">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
            <div className="card">
                    <img src="/images/siomay-ayam.PNG" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Siomay Ayam</h5>
                        <p className="card-text"><del>Rp.2200/pc</del>Rp. 2.000/pc</p>
                        <a href="#" className="btn btn-warning">Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}
