import React from 'react';
import "./navbar.styles.css";
import { Link } from "react-router-dom";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className='navbar-container'>
      <div className='nav-links'>
        <Link to="/home" className='nav-link'>
          <button>Home</button>
        </Link>
        <Link to="/favorites" className='nav-link'>
          <button>Favorites</button>
        </Link>
        <Link to="/create" className='nav-link'>
          <button>Create Dog</button>
        </Link>
        <Link to="/about" className='nav-link'>
          <button>About</button>
        </Link>
      </div>
      <form className='search-form' onChange={handleChange}>
        <input className='search-input' placeholder='Buscar por raza' type='search' />
        <button type='submit' onClick={handleSubmit} className='search-button'>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Navbar;
