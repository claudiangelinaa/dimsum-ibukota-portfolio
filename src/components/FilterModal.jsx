import { Modal, ModalBody } from 'reactstrap';
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function FilterModal() {
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState([])
    const products = useSelector(state => state.product)

    const getCategory = () => {
        let arrCategory = []

        products.products.forEach((value) => {
            if(arrCategory.includes(value.category)){

            }else{
                arrCategory.push(value.category)
            }
        })
        console.log('arrCategory:', arrCategory);
        setCategory(arrCategory)
    }

    useEffect(() => {
        getCategory()
    },[])

    return (
        <div>
            <div>
                <div className="text-start">
                    <button className="btn btn-outline-danger my-3" onClick={()=> setShowModal(true)} >Filter</button>
                    <button className="btn btn-outline-danger mx-3">Sort</button>
                </div>
            </div>
            <Modal isOpen={showModal} toggle={!showModal}>
                <ModalBody className="px-5 py-5">
                    <div className="text-center">
                        <h3>
                            Filter Data
                        </h3>
                    </div>
                    <div className="mt-3">
                        <label for="Category">Category</label>
                            <select className="form-control">
                            <option value="All">All</option>
                                {
                                    category?
                                        category.map((value, index) => {
                                            return (
                                                <>
                                                <option key={index} value={value}>{value}</option>
                                                </>
                                            )
                                        })
                                    :
                                        null
                                }
                            </select>
                    </div>
                </ModalBody>
                <div>
                    <input type="button" value="Filter Data" className="btn btn-danger w-100" />
                </div>
            </Modal>
            
        </div>
    )
}
