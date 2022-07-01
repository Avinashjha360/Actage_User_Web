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
  useEffect(() => {
    axios.get(
      'https://care360-net-dev.azurewebsites.net/api/UesrTest/GetLatestUserTestByMedicalTests?profileId=91e6f26e-07a1-4aed-94ab-cd1925c72061',
      {headers: {
              "Access-Control-Allow-Origin" : "*",
              "Content-type": "Application/json",
              "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGY5ODg3OTYtZTI4Ny00Zjc3LWE3MWQtMWQ4N2E3NGI1ZWY5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4NzA3ODg3MjkwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6ImIxOGFiYzg1LWZhYWEtNDJjMy1hMjg0LTRlMzA4OGY2ZWU1MCIsImV4cCI6MTY1NzEyODQ4MiwiaXNzIjoiQWxhVGVjaCIsImF1ZCI6ImNhcmUzNjBDbGllbnQifQ.L-pgD2S8HiMh2T4Epjuy16Qdwp8d90X9eJjOUNOWJ9c`
              }   
      }
    )
    .then((res) => {
        var response = res.data;
        console.log(response.data);
      },
      (error) => {
        var status = error.response.status
        console.log(status);
      }
    );
  }, []);

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