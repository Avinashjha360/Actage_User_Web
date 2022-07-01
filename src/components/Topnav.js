import React from 'react';
import './style/topnav.css';

function Topnav() {
  return (
    <header>
      <img src="images/logo.png" alt="logo" />
      <div className="search-bar">
        <input type="search" placeholder='Search Here' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  )
}

export default Topnav