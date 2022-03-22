import React from 'react'

export default function SortModal() {
    return (
        <div>
            {/* Modal section */}
            <div>
                    <Modal isOpen={this.state.showModal} toggle={()=> this.setState({showModal: false})}>
                        <ModalBody className="px-5 py-5">
                            <div className="text-center">
                                <h3>
                                    Filter Data
                                </h3>
                            </div>
                            <div className="mt-3">
                                <label for="Category">Category</label>
                                    <select className="form-control" ref="selectCategory" >
                                    <option value="All">All</option>
                                    {
                                        this.state.allCategory ?
                                            this.state.allCategory.map((value)=>{
                                            return(
                                                <>
                                                        <option value={value}>{value}</option>
                                                </>
                                            )
                                        })
                                        :  
                                            null
                                    }
                                    </select>
                                    
                            </div>
                            <div className="mt-3">
                                <label for="Brand">Brand</label>
                                    <select className="form-control" ref="selectBrand" >
                                        <option value="All">All</option>
                                        {
                                            this.state.allBrand ?
                                                this.state.allBrand.map((value)=>{
                                                return(
                                                    <>
                                                            <option value={value}>{value}</option>
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
                                <input type="button" value="Filter Data" className="btn btn-warning w-100" onClick={this.onFilterData}/>
                            </div>
                    </Modal>
                </div>
        </div>
    )
}
