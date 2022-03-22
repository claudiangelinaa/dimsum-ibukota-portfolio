import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterModal from '../components/FilterModal'
import { doCheckLogin } from '../redux/Actions/authAction'
import { doInitProducts } from '../redux/Actions/productAction'

export default function Products() {
    const auth = useSelector(state => state.auth)
    const products = useSelector(state => state.product)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('my-tkn')
        if(token){
            dispatch(doCheckLogin(token))
        }
        dispatch(doInitProducts(token))
    }, [])

    return (
        <div className="container text-center mt-3">
            <h1>Products</h1>
            <FilterModal />
            <div className="row text-dark">
                {
                    products.products.map((value, index) => {
                        return (
                            <div className="col-3">
                                <div className="card" key={index}>
                                    <img src={value.image1} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">{value.name}</h3>
                                        <h5 className="card-title">{value.category}</h5>
                                        <h5 className="card-title">{value.description}</h5>
                                        <p className="card-text">{value.price}</p>
                                        <p className="card-text">{value.stock}</p>
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
