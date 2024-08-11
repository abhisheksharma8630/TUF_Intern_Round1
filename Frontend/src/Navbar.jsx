import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', margin: '0 10px' }}>Home</Link>
      <Link to="/dashboard" style={{ color: '#fff', margin: '0 10px' }}>Dashboard</Link>
      <Link to="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
