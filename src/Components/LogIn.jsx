import React from 'react';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import {LoggedIn} from '../Redux/Slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = useSelector((store) => store.Reducer);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const temp = data.users.map(item => item.email);
        if (temp.includes(email) && data.users.length !== 0)
        {
            var temp2 = data.users.filter(item => (item.email === email))
            if (temp2[0].password === password)
            {
                toast.success('Successful Log In !', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                dispatch(LoggedIn({loggedIn: 1, loggedUser: email}));
            }
            else 
            {
                toast.error('Incorrect Password !', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
        else {
            toast.error('Please Sign Up !', {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        setEmail('');
        setPassword('');
    }
    return (
        <>
        <div className="d-flex justify-content-sm-center" style= {{borderStyle: "solid", margin: "10%"}}>
        <form onSubmit={(event)=> handleSubmit(event)}>
        <h2 style = {{textAlign: "center"}}>Log In</h2>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(event)=> {setEmail(event.target.value)}}/>
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

export default LogIn