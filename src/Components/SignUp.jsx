import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Registration} from '../Redux/Slice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('')
    const data = useSelector((store) => store.Reducer);
    const dispatch = useDispatch();
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (password.length < 6)
        {
            toast.error('Password is too small !', {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else {
            const temp = data.users.map(item => item.email);
            if (temp.includes(email) && data.users.length !== 0)
            {
                toast.error('Email Already Exists!', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            else 
            {
                dispatch(Registration({users: [{userName: userName, password: password, firstName: firstName, lastName: lastName, email: email, DOB: DOB}]}));
                toast.success('Sign Up Successful !', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
        setUser('');
        setPassword('');
        setDOB('');
        setEmail('');
        setFirst('');
        setLast('');
        // console.log(data);  data is updated but will not show here in console. but if you console log below in html portion,
        // it will work correctly because component is rerendering. The function will run with old value of data because it is 
        // the first render. Value will updtae on next render, since new copy is compared with old copy prior to this. 
    }
    return (
        <>
        <div className="d-flex justify-content-sm-center" style= {{borderStyle: "solid", margin: "3%"}}>
        <form onSubmit={(event)=>handleSubmit(event)}>
        <h2 style = {{textAlign: "center"}}>Sign Up</h2>
        <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="firstName" className="form-control" placeholder="Enter First Name" value={firstName} onChange={(event)=> {setFirst(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="lastName" className="form-control" placeholder="Enter Last Name" value={lastName} onChange={(event)=> {setLast(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="date">Date of Birth:</label>
            <input type="date" className="form-control" placeholder="Enter Date of Birth"  value={DOB} onChange={(event)=> {setDOB(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(event)=> {setEmail(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="username" className="form-control" placeholder="Enter User Name" value={userName} onChange={(event)=> {setUser(event.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(event)=> {setPassword(event.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-success" style={{marginLeft: "29%", marginBottom: "10px"}}>Submit</button>
        </form>
        </div>
        </>
    );
}

export default SignUp