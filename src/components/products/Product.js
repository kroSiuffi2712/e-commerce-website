import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import '../../style/storeStyle.css'
import {fetchStores} from '../../actions/storeAction'

import Loader from '../Pages/Loader'

const Product = ({storeData, fetchStores}) =>{
    const options =['All Products', 'men clothing','women clothing','jewelery','electronics'];
    const [option, setOption]=useState('All Products');

    useEffect(()=>{
        fetchStores();
    },[fetchStores]);

   
    return  (storeData.length>0) ? (
    <div className="small-container">

            <div className="row row-2">
                <h2>All Products</h2>
                <select id="option" value={option}  onChange={e => setOption(e.target.value)}>
                {options.map(op =><option key={op} value={op}>{op}</option>)}
                </select>
            </div>

            <div className="row">
                {(option === "All Products" ? storeData : storeData.filter(item=> item.category===option)).map(c => 
                <Link key={`link-product-${c.id}`} to={`products/${c.id}`}>
                <div key={`product-${c.id}`} className="col-4">
                    <img src={c.image} alt="" />
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <p>{`$${c.price}`}</p>
                </div>
                </Link>
                )}

                </div>
                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
         ):
         (<Loader />)
}

const mapStateToProps = state =>{
    return{
        storeData:state.store.products
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchStores:()=>dispatch(fetchStores())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);