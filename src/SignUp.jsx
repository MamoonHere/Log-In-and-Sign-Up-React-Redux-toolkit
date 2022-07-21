import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Registration} from './Redux/Slice'

const SignUp = () => {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');

    const data = useSelector((store) => store.Reducer);
    const dispatch = useDispatch();
    const handleSubmit = async(event) => {
        event.preventDefault();
        dispatch(Registration({users: [{userName: userName, password: password}]}));
        alert("You have successfully signed up");
        // console.log(data);  data is updated but will not show here in console. but if you console log below in html portion,
        // it will work correctly because component is rerendering. The function will run with old value of data because it is 
        // the first render. Value will updtae on next render, since new copy is compared with old copy prior to this. 
    }
    return (
        <>
        <div className="d-flex justify-content-sm-center" style= {{borderStyle: "solid", margin: "10%"}}>
        <form onSubmit={(event)=>handleSubmit(event)}>
        <h2 style = {{textAlign: "center"}}>Sign Up</h2>
        <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="username" className="form-control" placeholder="Enter User Name" id="username" value={userName} onChange={(event)=> {setUser(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={password} onChange={(event)=> {setPassword(event.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-success" style={{marginLeft: "29%", marginBottom: "10px"}}>Submit</button>
        </form>
        </div>
        </>
    );
}

export default SignUp