import axios from "axios"

export const doInitProducts = (token) => {
    return(dispatch) => {
        dispatch({
            type: 'LOADING'
        })

        axios.get('http://localhost:4000/authentic-system/get-all-products', {
            headers: {
                'authorization': `${token}`
            }}
        )
        .then((res) => {
            console.log(res.data.result);
            dispatch(
                {
                    type: 'INIT_PRODUCTS',
                    payload: res.data.result
                }
            )
        })
        .catch(err=> {
            console.log(err);
            // dispatch(
            //     {
            //         type: 'AUTH_ERROR',
            //         payload: err.message
            //     }
            // )
        })
    }
}