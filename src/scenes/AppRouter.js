import React from 'react';
import { Route} from 'react-router-dom';

import Home from '../components/Admin/Main'
import Products from '../components/products/Product'
import ProductDetail from '../components/products/ProductDetails'
import Cart from '../components/Cart/Cart'
  
const AppRouter= () =>{
    return(
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
        </div>
    );
}

export default AppRouter;