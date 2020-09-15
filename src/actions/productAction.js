import axios from 'axios'
import {storeType} from "../constants/storeType"

export const fetchProductRequest = () =>{
    return {
        type:storeType.FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = product =>{
    return {
        type:storeType.FETCH_PRODUCT_SUCCESS,
        payload:product
    }
}

export const fetchProductFailure = error =>{
    return {
        type:storeType.FETCH_PRODUCT_FAILURE,
        payload:error
    }
}

export const resetProduct = () =>{
    return{
        type:storeType.RESET_PRODUCT
    }
}


export const fetchProduct = (id) =>{
    return async (dispatch)=>{
        dispatch(fetchProductRequest);
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response =>{
            const product = response.data;
            dispatch(fetchProductSuccess(product));
        })
        .catch(error =>{
            const errorMsg = error.message 
            dispatch(fetchProductFailure(errorMsg));
        })
    }
}

export const resetProductFromStore = () =>{
    return (dispatch) =>{
        dispatch(resetProduct);
    }
}
