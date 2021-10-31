import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'


const Header = () => {
  const { user, handleLogout } = useAuth();
  console.log(user)

  return (
    <div className="header">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/menu">Menu</Link>
      <Link className="link" to="/order">Place Order</Link>
      <Link className="link" to="/contact">Contact Us</Link>

      {user?.email && <span style={{ color: 'black' }}>Hello {user.displayName} </span>}
      {
        user ?
          <button onClick={handleLogout}>log out</button>
          :
          <Link to="/login">Login</Link>}

    </div>
  );
};

export default Header;