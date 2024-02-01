// LoginForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../src/styles/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked with:', { email, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
      </form>
      <div className="register-link">
        <p>
          Don't have an account?{' '}
          <Link to="/register">
            Register Now!!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
