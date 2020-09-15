import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import '../../style/storeStyle.css'

import logo from '../../images/storeLogo.png'
import menu from '../../images/menu.png'
import cartImg from '../../images/cart.png'

const Header = () =>{
const [sMenu,setsMenu] =useState(true)

    const cart = useSelector(state => state.cart);
    const showMenu =() =>{
        setsMenu(!sMenu);
    }

    return(
    <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} width="125px" alt="" />
                </div>
                <nav className={!sMenu ? "v-menu":"h-menu"}>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Product</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Account</li>
                    </ul>
                </nav>
                <div className="menu-icons">
                <Link to="/cart"><div className="cart"><img src={cartImg} width="30px" height="30px" alt=""/><span className="cart-image">{cart.quantity}</span></div></Link>
                <img src={menu} className="menu-icon"  onClick={()=>showMenu()} width="30px" height="30px" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header;