// src/components/Login/Login.jsx
import React, { useState } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
	<>
		<div className='main-container'>
			<div className='login-title'>Log In</div>
    		<div className='login-form'>
				<div className='email-label'>Email</div>
      			<input
        			type="email"
        			value={email}
        			onChange={(e) => setEmail(e.target.value)}
					className='login-input'
      			/>
				<div className='password-label'>Password</div>
      			<input
        			type="password"
        			value={password}
        			onChange={(e) => setPassword(e.target.value)}
					className='login-input'
      			/>
    		</div>
		</div>
		<div className='navbar-container'>
			<Link to="/signup/1" className='signuplink'>
				<div className='signup-link'>SignUp</div>
			</Link>
			<Link to="/login" className='loginlink'>
				<div className='login-link2'>Login</div>
      		</Link>
	  	</div>
	</>
  );
}

export default Login;
