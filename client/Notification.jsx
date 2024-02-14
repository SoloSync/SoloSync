import React, { useState, useEffect } from 'react';
// import { fetchConnectionRequests, approveRequest, denyRequest } from '../server/routers/user'
import NavBar from './NavBar'; 


function Notification() {
    const [connectionRequests, setConnectionRequest] = useState([]);

    // useEffect(() => {
    //     fetchConnectionRequests()
    //     .then(data => setConnectionRequest(data))
    //     .catch(error => console.error('Error fetching connection requests:', error));
    // }, [])

    // const handleApprove = requestId => {
    //     approveRequest(requestId)
    //     .then(() => {
    //         setConnectionRequest(connectionRequests.filter(request => request.id !== requestId))
    //     })
    //     .catch(error => console.error('Error approving request:', error));
    // }

    // const handleDeny = requestId => {
    //     denyRequest(requestId)
    //     .then(() => {
    //         setConnectionRequest(connectionRequests.filter(request => request.id !== requestId))
    //     })
    //     .catch(error => console.error('Error denying request:', error));
    // }


    return(
        <div>
            <NavBar />
            <div>
                <h1>Connection Requests</h1>
                {/* <div>
                <li key={request.id}>
                    <p>{request.senderName} wants to connect with you. </p>
                    <button onClick={() => handleApprove(request.id)}> Approve </button>
                    <button onClick={() => handleDeny(request.id)}> Deny </button>
                </li>
            </div> */}
            </div>
        </div>
    )
}


export default Notification;