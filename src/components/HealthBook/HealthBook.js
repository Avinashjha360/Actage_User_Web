import React, { useState, useEffect } from 'react'
import Table from './Table';
import { HealthBookColumns } from './columns'
import AddNewTest from './AddNewTest';
import { Button } from '@mui/material';
import api from './api';

function HealthBook() {

  const [tabledata, settabledata] = useState([]);
  const [toggle, settoggle] = useState(false);
  
  function addnewtestbutton() {
    settoggle(!toggle);
  }
  useEffect(() => {
    api.get('/UesrTest/GetLatestUserTestByMedicalTests?profileId=91e6f26e-07a1-4aed-94ab-cd1925c72061')
      .then((res) => {
        var response = res.data;
        console.log(response.data);
        settabledata(response.data)
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    <>
        <div className="add-test-box">
          {toggle && <AddNewTest settoggle={settoggle} />}
        </div>
        <div className="box">
          <div>
            {!toggle && <Button style={{float:"right"}} variant="contained" onClick={addnewtestbutton}>Add More</Button>}

            <h3>Health Book</h3>
            <p>Dashboard/ <span>Health Book</span></p>
          </div>
          <Table tabledata={tabledata} columns={HealthBookColumns} />
        </div>
    </>
  )
}

export default HealthBook