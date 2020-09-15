import {storeType} from '../constants/storeType'

export const addToCart = product =>{
    return {
        type:storeType.ADD_TO_CART,
        payload:product
    }
}

export const removeFromCart = productId =>{
    return {
        type:storeType.REMOVE_FROM_CART,
        payload:productId
    }
}

export const addProductToCart = (product) =>{
    return (dispatch)=>{
        dispatch(addToCart(product))
    }
}

export const removeProductFromCart = (id) =>{
    return (dispatch)=>{
        dispatch(removeFromCart(id))
    }
}
