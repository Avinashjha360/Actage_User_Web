import React,{useState,useEffect} from 'react'
import './style/addnewtest.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import api from './api';
import Button from '@mui/material/Button';
function AddNewTest(props) {

  const [category, setCategory] = useState([]);
  const [testname, setTestname] = useState([]);
  
  const [UserTestData, setUserTestData] = useState({
    profileId:"91e6f26e-07a1-4aed-94ab-cd1925c72061",
    medicalTestId: "",
    testName:"",
    testDate:"",
    measureMentUnit:"",
    testResult: "",
    testReportImage: "Not found"
  });

  useEffect(()=>{
    api.get('/TestCategory/GetTestCategories')
    .then((res)=>{
      var response = res.data;
       setCategory(response.data);
       console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  },[]);
 

function getTestname(props){
    api.get('/MedicalTest/GetMedicalTestByCategory?categoryId='+props+'')
    .then((res)=>{

      var response = res.data;
      setTestname(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
      setTestname([]);
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();

    api.post('/UesrTest/AddUserTest', UserTestData)
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
  
    props.settoggle(false);  
  }

  const handlechange=(event)=>{
    const name=event.target.name;
    let value=event.target.value;
    
    setUserTestData(values=>({...values,[name]:value}));
  }
  
  const onSelectTestName=(event)=>{
    setUserTestData(values=>{ 
      return { ...values,
          medicalTestId : event.target.value.split(":")[0],
               testName : event.target.value.split(":")[1],
        measureMentUnit : event.target.value.split(":")[2]  
        }});
  }




  return (
    <div className='add-test'>
      <h5>Add New Test Value<i className="material-icons" onClick={() => props.settoggle(false)}>clear</i></h5>
        <form onSubmit={handleSubmit}>

          {/* select test category */}
          <select name="category" defaultValue={'DEFAULT'}  onClick ={(e) => getTestname(e.target.value)} >
             <option value="DEFAULT" disabled>Select Category</option>
            { category.map((c, index) => <option value={c.id || ""}  key={index}>{c.categoryName}</option> )}
          </select>
           {/* select test category */}

          {/* select test name */}
          <select name="testName"  defaultValue={'DEFAULT'}  onChange={onSelectTestName} >
            <option value="DEFAULT" disabled>Select Test Name</option>
            { testname.map((t,index)=>  <option value={t.id+":"+t.testName+":"+t.measureMentUnit || ""} key={index}>{t.testName}</option> )}
          </select>
        {/* select test name */}

          <input type="text" name="testResult" placeholder='Enter Value'  value={UserTestData.testResult || ""} onChange={handlechange} />
          <input type="date" name="Date" value={UserTestData.Date || ""} onChange={handlechange} />
          <input type="time" name="testDate" value={UserTestData.testDate || ""} onChange={handlechange}  />
          

          <label>Upload image</label>
          <div className='upload-test-report'>
            <p>Upload test report</p>
            <label htmlFor="icon-button-file">
              <PhotoCamera color="primary" size="small" aria-label="upload picture" />
              <InsertPhotoIcon color="primary" size="small" aria-label="upload picture" />
            </label>
          </div>
          <Button type='submit' variant="contained">Submit</Button>
          
        </form>
    </div>
  )
}

export default AddNewTest