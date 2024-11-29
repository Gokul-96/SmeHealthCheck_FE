import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div className='container'>
         <span>
        <img
          src="https://smehealthcheck.credilinq.ai/static/images/logo.svg"
          alt="Logo"
        />
      </span>
       <span className='text'><p>SME HealthCheck - Get Started</p> </span>
    </div>
    
  )
}

export default Header