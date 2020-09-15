import {storeType} from "../constants/storeType"


const initialState = {
    loading:false,
    products:[],
    error:''
}


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case storeType.FETCH_STORE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case storeType.FETCH_STORE_SUCCESS:
            return{
                loading:false,
                products:action.payload,
                error:''
            }
        case storeType.FETCH_STORE_FAILURE:
            return {
                loading:false,
                products:[],
                error:action.payload
            }
        default:
            return state
    }
}

export default reducer;