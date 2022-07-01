import React from 'react'
import './style/addnewtest.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function Addnewtest(props) {
  return (
    <div className='add-test'>
      <h5>Add New Test Value<i className="material-icons" onClick={() => props.settoggle(false)}>clear</i></h5>
        <form action="">
          <select name="" id="" >
            <option value="select">Select Category</option>
            <option value="Weight">Weight</option>
            <option value="Covid19">Covid19</option>
            <option value="Temperature">Temperature</option>
            <option value="Pulse">Pulse</option>
            <option value="Blood Pressure">Blood Pressure</option>
          </select>
          <select name="" id="">
            <option value="select">Select Test Name</option>
          </select>
          <input type="text" name="" id="" placeholder='Enter Value' />
          <input type="date" name="" id="" />
          <input type="time" name="" id="" />
          <div className='upload-test-report'>
            <p>Upload test report</p>
            <label htmlFor="icon-button-file">
              <PhotoCamera color="primary" size="small" aria-label="upload picture" />
              <InsertPhotoIcon color="primary" size="small" aria-label="upload picture" />
            </label>
          </div>
          <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Addnewtest