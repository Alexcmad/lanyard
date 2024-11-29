import React, {useState, useEffect} from "react";
import './LoginSignup.css'

import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const LoginSignup = () => {

    const [action,setAction] = useState("Login")

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token); // Store the JWT
            navigate('/dashboard');  // Use navigate to redirect to the dashboard
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return(
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleLogin}>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder={"Email"}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder={"Password"}/>
                </div>
            </div>
            <div className="submit-container">
                    <div className={action=="Login"?"submit gray":"submit"} onClick={action=="Login"?()=>{}:()=>{}}>Sign Up</div>
                    <div className={action=="Sign Up"?"submit gray":"submit"}>Login</div>
            </div>
            </form>
        </div>
    )
}

export default LoginSignup