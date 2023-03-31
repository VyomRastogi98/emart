import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import Header from '../Navigation/Header'
import { useState } from 'react'
import './Login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add login logic here
  };

  return (
    <div>
      <Header/>
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-button-container">
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login
