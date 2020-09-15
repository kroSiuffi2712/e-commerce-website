import {storeType} from '../constants/storeType'

const initialState={
    products:[],
    quantity:0,
    subTotal:0,
    tax:0,
    total:0
}

const reducer = (state=initialState, action) =>{
    let product={};
    let tax=0;
    let subTotal=0;
    switch(action.type){
        case storeType.ADD_TO_CART:
            /***NOTE:Remove*****/
            product = action.payload;
            product.subTotal=(action.payload.price * action.payload.quantity);
            tax = 30.00;
            subTotal =Math.round(((state.subTotal + product.subTotal) + Number.EPSILON) * 100) / 100
            const total =  Math.round(((tax + subTotal) + Number.EPSILON) * 100) / 100
            /**************** */
            
            return{
                products:[...state.products, product],
                quantity:state.quantity+1,
                subTotal:subTotal,
                tax:tax,
                total: total
            }

        case storeType.REMOVE_FROM_CART:
            /***NOTE:Remove*****/
            product=state.products.filter(p=> p.id===action.payload).shift();
            subTotal = Math.round(((state.subTotal - product.subTotal) + Number.EPSILON) * 100) / 100;
            const totalPrice =Math.round(((subTotal + state.tax) + Number.EPSILON) * 100) / 100;
            const removeProduct =state.products.filter(p=> p.id!==action.payload)
            /**************** */

            if (removeProduct.length>0)
                return {
                    products:removeProduct,
                    quantity:state.quantity - 1,
                    subTotal:subTotal,
                    tax:state.tax,
                    total:totalPrice
                }
            else
                return {
                    products:[],
                    quantity:0,
                    subTotal:0,
                    tax:0,
                    total:0
                }
        default:
            return state
    }
}

export default reducer;