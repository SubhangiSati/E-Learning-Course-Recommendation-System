// src/components/Homepage/Home.jsx
import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='title'>Enhance Your Learning</div>
	  <div className='description'>An AI model that finds out the best educational resources<br />in the clutter specifically for you. An AI that adapts<br />to your needs needs to enhance your learning.</div>

		

	  <div className='navbar-container'>
	  	
        <div className='nav-links'>
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/about">
				<div>About Us</div>
			</Link>
			
		</div>
		<Link to="/login" className='loginlink'>
			<div className='login-link'>Login</div>
      	</Link>
	  </div>
      
    </>
  );
}

export default Home;
