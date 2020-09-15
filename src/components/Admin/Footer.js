import React from 'react'

import logoWhite from '../../images/storeLogo.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-3">
                    <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-2">
                    <img src={logoWhite} alt="" />
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2020</p>
            </div>
        </div>
    )
}
export default Footer;