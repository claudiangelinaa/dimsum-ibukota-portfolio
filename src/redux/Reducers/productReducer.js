let initialState = {
    loading: false,
    products: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'INIT_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state
    }
}

export default productReducer;