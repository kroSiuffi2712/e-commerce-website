import storeReducer from './storeReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'


const rootReducers = combineReducers({
    product:productReducer,
    store : storeReducer,
    cart:cartReducer
});

export default rootReducers;