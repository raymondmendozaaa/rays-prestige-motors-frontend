import React from 'react';
import {useState, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useUser } from '../../UserContext.js';

import './Login.css';

function Login(){
    const [errorMessage, errorMessageSetter] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const {setUsername} = useUser();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let user = {};
        user.username = usernameRef.current.value;
        user.password = passwordRef.current.value;

        let parameters = {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
          }
        console.log("handleLogin called");
        let url = 'http://localhost:5000/user_info/login';

        fetch(url, parameters)
          .then(res => {
            if (res.status === 200)
                return res.json();
            else if (res.status === 401)
                throw new Error("Invalid username or password");
            else 
                throw new Error("Error occured. Please try again.")
          })
          .then(json => {
            errorMessageSetter(''); // clear any old error messages
            setUsername(user.username)
            localStorage.setItem('username',user.username);
            navigate('/home');
          })
          .catch(err => {
            console.log(err);
            errorMessageSetter(err.message);
          })
    }

    return (
        <div className='page-bg'>
        <div className="login-container">
        <div className="login-wrapper">
            <h2 className="login-title">Login to Browse our Inventory</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="login-form-row">
                    <label>
                        Username:
                        <input 
                        type="text" 
                        name="username"
                        ref={usernameRef} />
                    </label>
                </div>
                <div className="login-form-row">
                    <label>
                        Password:
                        <input 
                        type="password" 
                        name="password"
                        ref={passwordRef} />
                    </label>
                </div>
                <div className="login-form-row">
                    <button type="submit">Log In</button>
                </div>
            </form>

            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}
            <div id="register-link">Don’t have an account? <Link to="/register">Create Account Here</Link></div>
        </div>
    </div>
    </div>
    )

}

export default Login;