import React,{useState, useEffect } from 'react'
import Table from './Table';
import {ViewMorecolumns} from './columns'
import { Button } from '@mui/material';
import './style/healthbook.css'
import { useParams,useLocation } from 'react-router-dom';
import api from './api';


function ViewMore() {

  const [tabledata, settabledata] = useState([]);
  const id=useLocation().state.from;
  let {TestName} = useParams();

  
  useEffect(()=>{
    api.get('/UesrTest/GetUserTestByMedicalTestId?medicalTestId='+id+'&profileId=91e6f26e-07a1-4aed-94ab-cd1925c72061')
    .then((res)=>{
      var response = res.data;
      console.log(response.data);
     settabledata(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[]);

  return (
    <>
     <div className="box">
        <div>
        <Button className='btn' variant="contained">Share</Button>
          <h3>{TestName}</h3>
          <p>Dashboard/ <span>Health Book</span></p>
        </div>
        <Table tabledata={tabledata} columns={ViewMorecolumns}/>
      </div>
    </>
  )
}

export default ViewMore;