import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/menu">Menu</Link>
      <Link className="link" to="/order">Place Order</Link>
      <Link className="link" to="/contact">Contact Us</Link>
    </div>
  );
};

export default Header;