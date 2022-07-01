import React from 'react';
import "./style/home.css";
import Topnav from './Topnav'
import Middle from './Middle'

const Home = () => {
  return (
    <>
    <Topnav />
    <div className='middle'>
    <Middle/>
    </div>
    </>
  )
}
export default Home