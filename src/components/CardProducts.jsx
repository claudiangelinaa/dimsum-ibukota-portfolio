import React from 'react'

export default function CardProducts() {
    return (
        <>
            <div className="col-4">
                <div class="card">
                    <img src="/images/siomay-udang.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Siomay Udang</h5>
                        <p class="card-text"><del>Rp.2800/pc</del>Rp. 2.500/pc</p>
                        <a href="#" class="btn btn-warning">Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}
