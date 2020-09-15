import Product from '../components/products/Product';
import ProductDetails from '../components/products/ProductDetails';
import Cart from '../components/Cart/Cart';
import Main from '../components/Admin/Main';

export const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/product",
        component: Product
    },
    {
        path: "/productDetails",
        component: ProductDetails
    },
    {
        path: "/cart",
        component: Cart
    }
  ];
