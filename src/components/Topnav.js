import React from 'react';
import './style/topnav.css';
import { Button } from '@mui/material';
function Topnav() {
 function deleteToken(){
  localStorage.removeItem('token');
  window.location.reload();
 }
  return (
    <>
      <header>
        <div>
        <img src="images/logo.png" alt="logo" />
        </div>
        <div className="search-bar">
        <input type="search" placeholder='Search Here' />
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
        <Button className='logout-btn' variant="contained" onClick={deleteToken}>LogOut</Button>
        </div>
      </header>
    </>
  )
}

export default Topnav