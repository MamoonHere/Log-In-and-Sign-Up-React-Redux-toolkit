import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Menu = () => {
    return (
        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link to= "/login">
            <button type="button" className="btn btn-success" >Log In</button>
            </Link>
            </li>
            <li className="nav-item">
            <Link to= "/signup">
            <button type="button" className="btn btn-success"  style={{marginLeft: "7%"}}>Sign Up</button>
            </Link>
            </li>
            <li className="nav-item">
            <Link to= "/">
            <button type="button" className="btn btn-success"  style={{marginLeft: "9.9%"}}>Hide Items</button>
            </Link>
            </li>
        </ul>
        </nav>
        <Routes>
            <Route exact path='/' element = {<></>}></Route>
            <Route exact path='/login' element={< LogIn />}></Route>
            <Route exact path='/signup' element={< SignUp />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Menu