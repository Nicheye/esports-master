import React, { useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

const Navigate = () => {
	const [isAuth,setIsAuth] = useState(false)
	useEffect(() => {
		if(localStorage.getItem('access_token') !== null){
			setIsAuth(true);
		}
	},[isAuth]);
  return (

  <>
  <nav>
    <header className='header'>
      <div className="left">{isAuth ? <Link to="/" className='nav_link'>Home</Link> : null}
      <Link to="/games" className='nav_link'>Games</Link>    </div>
      
      <div className="center">
      <div className="head-brand">E-SPORTS <span className='head-brand-span'>MASTER</span></div>
      </div>
      <div className="right">
      {isAuth ? <Link to="/logout" className='nav_link'>Logout</Link> :<Link to="/login" className='nav_link'>Login</Link>}
      {isAuth ? <Link to="/profile" className='nav_link'>Profile</Link> :<Link to="/register" className='nav_link'> Register</Link>}
      </div>
    </header>
  </nav>
  </>       
  )
}       
                  
        <Link to="/games" className='nav-link active'>Games</Link>      

export default Navigate