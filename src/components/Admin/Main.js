import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import '../../style/storeStyle.css'
import {Link} from "react-router-dom";

import image2 from '../../images/clothing.png'
import {fetchStores} from '../../actions/storeAction'

import Loader from '../Pages/Loader'

const Main = ({storeData, fetchStores}) =>{

    let menClothing,jewelery,electronics, womenClothing=[];
    let offer={};

    useEffect(()=>{
        fetchStores();
    },[fetchStores]);

    if (storeData.products.length>0){
        menClothing = storeData.products.filter(store=> store.category ==="men clothing");
        jewelery = storeData.products.filter(store=> store.category ==="jewelery");
        electronics = storeData.products.filter(store=> store.category ==="electronics");
        womenClothing =storeData.products.filter(store=> store.category ==="women clothing");
        offer =electronics.shift();
    }

    /*const randomStart=()=> {
        return Math.round(Math.random()*10);
    }*/
    
    return (storeData.products.length>0) ? (
        <div>
            <div className="row row-info">
                <div className="col-2">
                        <h1>Collection Of Casual Wear</h1>
                        <p>"Don't be into trends. Don't make fashion own you, but you decide what you are,<br /> what you want to express by the way you dress and the way to live."</p>
                        <Link to="/products"><button  className="btn">Explore Now  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>
                </div>
                <div className="col-2">
                        <img src={image2} alt="" />
                </div>
            </div>
            
            
            <div className="categories">
                <h2 className="title">Products</h2>
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={menClothing.shift().image} alt=""/>
                            <a href="#menClothing"><h4> Men Clothing</h4></a>
                            
                        </div>
                        <div className="col-3">
                            <img src={womenClothing.shift().image} alt="" />
                            <a href="#womenClothing"><h4>Women Clothing</h4></a>
                        </div>
                        <div className="col-3">
                            <img src={electronics.shift().image} alt=""/>
                            <a href="#electronics"><h4>Electronics</h4></a>
                        </div>
                        <div className="col-3">
                            <img src={jewelery.shift().image} alt=""/>
                            <a href="#jewelery"><h4>Jewelery</h4></a>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div id="menClothing" className="small-container">
                <h2 className="title">Men Clothing</h2>
                <div className="row">
                    {menClothing.map(c =>   
                        <div  key={`menClothing-${c.id}`} className="col-4">
                            <Link to={`products/${c.id}`}>
                            <img  src={c.image} alt=""/>
                            <h4>{c.title}</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <p>{`$${c.price}`}</p>
                            </Link>
                        </div>
                    )}
                </div>
    
                <h2 id="womenClothing" className="title">Women Clothing</h2>
                <div  className="row">
                {womenClothing.slice(0,3).map(c => 
                    <div key={`clothing-${c.id}`} className="col-4">
                        <Link to={`products/${c.id}`}>
                        <img src={c.image} alt=""/>
                        <h4>{c.title}</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>{`$${c.price}`}</p>
                        </Link>
                    </div>
                )}    
                </div>
            </div>
             
            <h2 id="jewelery" className="title">Jewelery</h2>
                <div className="row">
                {jewelery.slice(0,3).map(c => 
                    <div key={`Jewelery-${c.id}`} className="col-4">
                        <Link to={`products/${c.id}`}>
                        <img src={c.image} alt=""/>
                        <h4>{c.title}</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>{`$${c.price}`}</p>
                        </Link>
                    </div>
                )}    
            </div>
    
            <h2 id="electronics" className="title">Electronics</h2>
                <div className="row">
                {electronics.slice(0,3).map(c => 
                    <div key={`electronics-${c.id}`} className="col-4">
                        <Link to={`products/${c.id}`}>
                        <img src={c.image} alt=""/>
                        <h4>{c.title}</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>{`$${c.price}`}</p>
                        </Link>
                    </div>
                )}    
            </div>
            
    
            <div className="offer">
                 <div className="small-container">
                     <div className="row">
                         <div className="col-2">
                             <img src={offer.image} className="offer-img" alt=""/>
                         </div>
                         <div className="col-2">
                            <p>Exclusively Available on Up2U Store.</p>
                            <h1>{offer.title}</h1>
                            <small>{offer.description}
                            </small><br />
                            <Link to={`products/${offer.id}`}>
                            <button href="" className="btn">Buy Now  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>
                         </div>
                     </div>
                 </div>
            </div>
                
        </div>
        ):
        (<Loader />)
}

const mapStateToProps = state =>{
    return{
        storeData:state.store
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchStores:()=>dispatch(fetchStores())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);