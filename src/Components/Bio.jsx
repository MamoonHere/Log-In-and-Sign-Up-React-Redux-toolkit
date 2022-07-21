import React from "react";
import { useSelector} from 'react-redux'

const Bio = () => {
    const data = useSelector((store) => store.Reducer);
    var x = data.users.filter(item => item.email === data.loggedUser);
    console.log(x);
    return (
        <div style={{width:"90%", borderStyle: "solid", textAlign:"center", marginTop: "10px", marginLeft: "5%"}}>
            <h3>Your Details</h3>
            <h5>First Name: {x[0].firstName}</h5>
            <h5>Last Name: {x[0].lastName}</h5>
            <h5>Date of Birth: {x[0].DOB}</h5>
            <h5>Personal Email: {x[0].email}</h5>
        </div>

    );
}
export default Bio;