// src/components/Signup/Signup.jsx
import React, { useState } from 'react';
import "./Signup.css"
import Signup1 from './Signup1.jsx';
import Signup2 from './Signup2.jsx';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const [choices, setChoices] = useState([
		"Computer Science", "Artificial Intelligence", "Mathematics"
	])

  const isSignup1 = location.pathname === '/signup/1';
  const isSignup2 = location.pathname === '/signup/2';

  const handleSignup = () => {
    // Handle signup logic here
    navigate('/login');
  };

  return (
    <div className='main-container'>
      <div>
        <div className='login-title'>Sign Up</div>
      </div>
      { isSignup1 ? <Signup1
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      /> : isSignup2 ? <Signup2 
      choices={choices} 
      />
       : <div> Error </div>
      }
      <div className='navbar-container'>
			<Link to="/login" className='signuplink'>
				<div className='signup-link'>Login</div>
			</Link>
			<Link to={isSignup1 ? "/signup/2" : isSignup2 ? "/dashboard" : "/"} className='loginlink'>
				<div className='login-link2'>{isSignup1 ? "Continue" : isSignup2 ? "Signup" : "Signup" }</div>
      		</Link>
	  	</div>
    </div>
  );
}

export default Signup;
