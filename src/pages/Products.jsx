import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
        .catch(err=> {
            console.log(err);
        })
    },[])

    return (
        <div className="container text-center mt-3">
            <h1>Products</h1>
            {/* {JSON.stringify(products)} */}
            <div className="row text-dark">
            {
                products.map((value, index) => {
                    return (
                            <div className="col-3">
                                <div class="card" key={index}>
                                    <img src={value.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h3 class="card-title">{value.name}</h3>
                                        <h5 class="card-title">{value.description}</h5>
                                        <p class="card-text">{value.price}</p>
                                        <p class="card-text">{value.stock}</p>
                                    </div>
                                    <button className="btn btn-danger">Add to Cart</button>
                                </div>
                            </div>

                    )
                    })
                    }
                    </div>
        </div>
    )
}
