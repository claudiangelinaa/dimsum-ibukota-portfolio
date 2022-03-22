import React from 'react'

export default function CardProducts() {
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
        </>
    )
}
