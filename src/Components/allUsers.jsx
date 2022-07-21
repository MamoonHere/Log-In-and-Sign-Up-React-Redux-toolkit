import React from 'react';
import { useSelector} from 'react-redux'

const AllUsers = () => {
    const data = useSelector((store) => store.Reducer);
    var count=0;

    return (
        <>
        <h3 style= {{textAlign:'center', marginTop: "20px"}}>Following are people currently registered.</h3>
        <div>
            {
                data.users.map((item) => 
                <div style={{borderStyle: 'solid', textAlign: "center"}} key = {count = count + 1}>
                    <h5>User Name:</h5>
                    <h6>{item.userName}</h6>
                </div>)
            }
        </div>
        </>
    );
}

export default AllUsers;