import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          OpenAI Sandbox
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
