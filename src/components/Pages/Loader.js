import React from 'react'

import '../../style/loader.css' 

const Loader = () =>{
    return(
    <div className="container-loader">
        <div className="formLoader">
            <ul className="formLoading">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div>
    </div>
    );
}
export default Loader;