import {storeType} from "../constants/storeType"

const initialState={
    loading:false,
    product:{},
    error:''
}

const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case storeType.FETCH_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case storeType.FETCH_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload,
                error:''
            }
        case storeType.FETCH_PRODUCT_FAILURE:
            return {
                loading:false,
                product:{},
                error:action.payload
            }
        case storeType.RESET_PRODUCT:
            return {
                loading:false,
                product:{},
                error:''
            }
        default:
            return state
    }
}

export default productReducer