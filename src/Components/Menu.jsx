import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import {LoggedIn} from '../Redux/Slice';
import AllUsers from './allUsers'
import { useSelector, useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import Bio from './Bio'

const Menu = () => {
    const data = useSelector((store) => store.Reducer);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(LoggedIn({loggedIn: 0, loggedUser: ''}));
        toast.success('Logged out !', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    const currentUser = () => {
        var x = data.users.filter(item => item.email === data.loggedUser);
        return x[0].userName;
    }

    const conditionalRender = () => {
        if(data.loggedIn === 0)
        {
            return (
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
            )
        }
        else{
            return (
                <ul className="navbar-nav">
                    <li>
                        <h3 style = {{color: 'whitesmoke', marginRight:'20px'}}>Welcome {currentUser()}</h3>
                    </li>
                    <li className="nav-item">
                        <Link to= "/ShowUsers">
                        <button type="button" className="btn btn-success" >Show All Users</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/LogOut">
                        <button onClick={()=>{handleLogOut()}} type="button" className="btn btn-success"  style={{marginLeft: "7%"}}>Log Out</button>
                        </Link>
                    </li>
                </ul>
            )
        }
    }
    return (
        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <div>
        {conditionalRender()}
        </div>
        </nav>
        <div>
            {data.loggedIn === 1? <Bio /> : <></>}
        </div>
        <Routes>
            <Route exact path='/' element = {<></>}></Route>
            <Route exact path='/login' element={data.loggedIn===0? < LogIn />: <></>}></Route>
            <Route exact path='/signup' element={< SignUp />}></Route>
            <Route exact path='/ShowUsers' element={< AllUsers />}></Route>
            <Route exact path='/LogOut' element = {<></>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Menu