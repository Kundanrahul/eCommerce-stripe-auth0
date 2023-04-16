import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping ,AiFillHome} from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0/client';
import Router from 'next/router';
import { useAuth0 } from "@auth0/auth0-react";


import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  // const {loginWithRedirect,isAuthenticated,logout,user}=useAuth0();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const {user,error,isLoading}=useUser();

  return (
    <div className="navbar-container">
      
      <p className="logo">
        <Link href="/"> <AiFillHome/> KUNDAN STORE</Link>
      </p>
      <div className='logincont'> 
  {user && (
    <div className="user-info" style={{ display: 'flex', alignItems: 'center' }}>
      <p className="welcome" style={{color:"azure", marginRight: '10px'}}>Welcome, {user.name}!</p>
      <button className="logbtn" onClick={() => window.location.href = '/api/auth/logout'}>
        Logout
      </button>
    </div>
  )}

  {!user && (
    <button className="logbtn" onClick={() => window.location.href = '/api/auth/login'}>
      Login
    </button>
  )}
</div>

     
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping className='shopsi' />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    
      
      {showCart && <Cart />}
    </div>

    
  )
}

export default Navbar