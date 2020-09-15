import axios from 'axios'
import {storeType} from "../constants/storeType"


export const fetchStoreRequest = () =>{
    return {
        type:storeType.FETCH_STORE_REQUEST
    }
}

export const fetchStoreSuccess = products =>{
    return {
        type:storeType.FETCH_STORE_SUCCESS,
        payload:products
    }
}

export const fetchStoreFailure =error =>{
    return {
        type:storeType.FETCH_STORE_FAILURE,
        payload:error
    }
}

export const fetchStores = () =>{
    return (dispatch) =>{
        dispatch(fetchStoreRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(response =>{
                const stores = response.data;
                dispatch(fetchStoreSuccess(stores));
        })
        .catch(error=>{
            const errorMsg = error.message;
            dispatch(fetchStoreFailure(errorMsg))
        })
    }
}