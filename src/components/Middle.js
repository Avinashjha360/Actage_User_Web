import React from 'react'
import Left from './Left';
import Right from './Right';
import "./style/sidebar.css";



function Middle() {
  return (
    <>
      <div className='middle'>
          <Left />
          <Right />
      </div>
    </>
  )
}

export default Middle