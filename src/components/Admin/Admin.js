import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import AppRouter from '../../scenes/AppRouter'


const Admin = () =>{
    return(
        <Router>
            <Header/>
            <AppRouter />
            <Footer/>
        </Router>
    )
}
export default Admin;