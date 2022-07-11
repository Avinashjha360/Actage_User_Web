import React, { useState} from 'react'
import AddNewTest from './AddNewTest';
import { Button } from '@mui/material';
import './style/healthbook.css'
import HealthBookTable from './HealthBookTable';

const th = ["Test Name", "Date", "Time", "Reading", "Unit", "View"];

function HealthBook() {
  const [toggle, settoggle] = useState(false);
  function addnewtestbutton() {
    settoggle(!toggle);
  }

  return (
    <>
      <div className="box">
        <div>
          {!toggle && <Button className='btn' variant="contained" onClick={addnewtestbutton}>Add More</Button>}

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

          <table className="table">
            <thead>
              <tr>
                {th.map((heading, index) => <th scope="col" key={index}>{heading}</th>)}
              </tr>
            </thead>
            <tbody>
              <HealthBookTable />
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
          {toggle && <AddNewTest settoggle={settoggle}/>}
        </div>

      </>
      )
}

export default HealthBook