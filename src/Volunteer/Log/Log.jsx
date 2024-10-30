import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import './Log.css';

function Log() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
 
    const checkData = ()=>
        {
        axios.post('http://localhost:1207/login', loginData)
        .then((res) => {
            if (res.data === 'Valid User') {
                setSuccessMessage('Login successful');
                localStorage.setItem('userEmail', loginData.email);
                setError('');
                navigate('/Profile', { state: { email: loginData.email } });
            } else {
                setError('Invalid User');
            }
        })
        .catch(() => {
            setError('An error occurred. Please try again later.');
        });
    }
        


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        // if not it was working
        // onSubmit={handleSubmit},
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={(evt) =>{
        evt.preventDefault();
      }}>
                <label>Email:</label>
                <input  type="email"  name="email" placeholder="Email"  onChange={handleChange} value={loginData.email} required />
                <br />
                <label>Password:</label>
                <div className="password-container">
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password"  onChange={handleChange} value={loginData.password} required />
                    <span onClick={togglePasswordVisibility}>
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                </div>
                <br />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <button  onClick={checkData}>Login</button>
            </form>
            {successMessage && <div className="popup-message">{successMessage}</div>}
        </div>
    );
}

export default Log;
