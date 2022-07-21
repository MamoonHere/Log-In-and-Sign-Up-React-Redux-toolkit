import React from 'react';
import { useState } from 'react';
import { useSelector} from 'react-redux'

const LogIn = () => {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');
    const data = useSelector((store) => store.Reducer);

    const handleSubmit = (event) => {
        event.preventDefault();
        const temp = data.users.map(item => item.userName);
        if (temp.includes(userName) && data.users.length !== 0)
        {
            var temp2 = data.users.filter(item => (item.userName === userName))
            if (temp2[0].password === password)
            {
                alert("Successful Log In")
            }
            else 
            {
                alert("Incorrect password");
            }
        }
        else {
            alert("Please Sign Up");
        }
        setUser('');
        setPassword('');
    }
    return (
        <>
        <div className="d-flex justify-content-sm-center" style= {{borderStyle: "solid", margin: "10%"}}>
        <form onSubmit={(event)=> handleSubmit(event)}>
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