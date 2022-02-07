import React from 'react';
import { useSelector } from 'react-redux'
import Login from './login';

function Profile(props) {

    const user = useSelector((state) => state.user.value);
    return (
        <div>
            <h1>Profile</h1>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
            <Login/>
        </div>
    );
}

export default Profile;