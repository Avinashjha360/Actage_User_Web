import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { Table1data } from './data'
import Addnewtest from './Addnewtest';
import { Button } from '@mui/material';
import './style/healthbook.css'

const th = ["Table Name", "Date", "Time", "Reading", "Unit", "View"];
function Tabledetail(props) {
  return (
    Table1data.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row"><img src={item.image} alt="logo" />{item.tableName}</th>
          <td>{item.Date}</td>
          <td>{item.Time}</td>
          <td>{item.Reading}</td>
          <td>{item.Unit}</td>
          <td><img src="images/Eye.png" alt="logo" /></td>
        </tr>
      )
    })
  )
}

function HealthBook() {
  const [toggle, settoggle] = useState(false);
  function addnewtest() {
    settoggle(!toggle);
  }
 

  return (
    <>
      <div className="box">
        <div>
          <Button className='btn' variant="contained" onClick={addnewtest}>Add More</Button>
          <h3>Health Book</h3>
          <p>Dashboard/ <span>Health Book</span></p>
        </div>

        <div className='table-box'>
          <span>Show
            <select id="cars" name="cars" size="1" >
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="fiat">3</option>
            </select>entries
          </span>

          <table className="table table-striped">
            <thead>
              <tr>
                {th.map((heading, index) => <th scope="col" key={index}>{heading}</th>)}
              </tr>
            </thead>
            <tbody>
              <Tabledetail data={Table1data} />
            </tbody>
          </table>
          <div className="bottom">
            <span>Showing 1 to 10 of 10 entries</span>
            <Button className='btn' variant="outlined" >Next</Button>
            <Button className='btn' variant="contained" color="success">1</Button>
            <Button variant="outlined" className='btn'>Previous</Button>
          </div>
        </div>
    </div>
        <div className="add-test-box">
          {toggle && <Addnewtest settoggle={settoggle}/>}
        </div>

      </>
      )
}

      export default HealthBook