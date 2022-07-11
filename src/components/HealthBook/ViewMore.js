import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import './style/healthbook.css'
import { useParams,useLocation } from 'react-router-dom';

const th = ["Date", "Time", "Reading", "Unit"];


function Tabledetail() {
  const [tabledata, settabledata] = useState([]);
  const id=useLocation().state.from;
  console.log("medicalTestId:"+id);

  const getData = async () =>
  { 
   await axios.get(
     'https://care360-net-dev.azurewebsites.net/api/UesrTest/GetUserTestByMedicalTestId?medicalTestId='+id+'&profileId=91e6f26e-07a1-4aed-94ab-cd1925c72061'
,
     {
      headers: {
             "Access-Control-Allow-Origin" : "*",
             "Content-type": "Application/json",
             "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDAwNTcwZTMtYmUzMS00MWI3LWIzNjctZWFlMzBlMjdkNzUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4ODk5ODk5MjQ5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6IjFmMWY3Yjc2LTlhYzQtNDA0YS05MTNjLTA4NzZkNDQ4MTViMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFzc29jaWF0ZSIsImV4cCI6MTY1OTUwNzE4NiwiaXNzIjoiQWxhVGVjaCIsImF1ZCI6ImNhcmUzNjBDbGllbnQifQ.lXMSTmEuwxbe-1MEm3tdoMmwHzhm8XKSMOjmimI78SM`
             }   
         }
   )
   .then((res) => {
       var response = res.data;
     console.log(response);
       settabledata(response.data)
     },
     (error) => {
       var status = error.response.status
       console.log(status);
     }
   );
  }
   useEffect(() => {
     getData();
   }, []);

   return (
     tabledata.map((item, index) => {
       return (
         <tr key={index}>
           <td>{item.testDate.split("T")[0]}</td>
           <td>{item.testDate.split("T")[1]}</td>
           <td>{item.testResult}</td>
           <td>{item.measurementUnit}</td>
         </tr>
       )
     })
   )
 }

function ViewMore() {
  const Heading=useParams().ViewMore;
  return (
    <>
     <div className="box">
        <div>
     <Button className='btn' variant="contained">Share</Button>
          <h3>{Heading}</h3>
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
          <thead className='thead-light'>
            <tr>
              {th.map((heading, index) => <th scope="col" key={index}>{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            <Tabledetail />
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default ViewMore;