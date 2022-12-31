import React from 'react';

function Navbar() {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <h2>OpenAI Sandbox</h2>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
