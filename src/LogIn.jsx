import React from 'react';
import { useState } from 'react';

const LogIn = () => {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <div className="d-flex justify-content-sm-center" style= {{borderStyle: "solid", margin: "10%"}}>
        <form>
        <h2 style = {{textAlign: "center"}}>Log In</h2>
        <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="username" className="form-control" placeholder="Enter User Name" id="email" value={userName} onChange={(event)=> {setUser(event.target.value)}}/>
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