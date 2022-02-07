import React from 'react';
import { useDispatch } from 'react-redux'
import { login, logout } from './../features/user'
function Login(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(login({ age: 22, name: "kennedy", email: 'lost' })) }}>Login
            </button>
            <button onClick={() => { dispatch(logout()) }}>Login
            </button>
        </div>
    );
}

export default Login;