import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './style/addnewtest.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

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

  const getCategory = async () =>
  {
  await axios.get('https://care360-net-dev.azurewebsites.net/api/TestCategory/GetTestCategories',
     {headers: {
             "Access-Control-Allow-Origin" : "*",
             "Content-type": "Application/json",
             "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDAwNTcwZTMtYmUzMS00MWI3LWIzNjctZWFlMzBlMjdkNzUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4ODk5ODk5MjQ5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6IjFmMWY3Yjc2LTlhYzQtNDA0YS05MTNjLTA4NzZkNDQ4MTViMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFzc29jaWF0ZSIsImV4cCI6MTY1OTUwNzE4NiwiaXNzIjoiQWxhVGVjaCIsImF1ZCI6ImNhcmUzNjBDbGllbnQifQ.lXMSTmEuwxbe-1MEm3tdoMmwHzhm8XKSMOjmimI78SM`
             }   
         }
   )
   .then((res) => {
       var response = res.data;
       setCategory(response.data);
       console.log(response.data);
     },
     (error) => {
       var status = error.response.status
       console.log(status);
     }
   );
  }
   useEffect(() => {
     getCategory();
   }, []);

function getTestname(props){
  
  axios.get('https://care360-net-dev.azurewebsites.net/api/MedicalTest/GetMedicalTestByCategory?categoryId='+props+'',
       {headers: {
               "Access-Control-Allow-Origin" : "*",
               "Content-type": "Application/json",
               "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDAwNTcwZTMtYmUzMS00MWI3LWIzNjctZWFlMzBlMjdkNzUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4ODk5ODk5MjQ5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6IjFmMWY3Yjc2LTlhYzQtNDA0YS05MTNjLTA4NzZkNDQ4MTViMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFzc29jaWF0ZSIsImV4cCI6MTY1OTUwNzE4NiwiaXNzIjoiQWxhVGVjaCIsImF1ZCI6ImNhcmUzNjBDbGllbnQifQ.lXMSTmEuwxbe-1MEm3tdoMmwHzhm8XKSMOjmimI78SM`
               }   
           }
     )
     .then((res) => {
         var response = res.data;
         setTestname(response.data)
         console.log(response.data);
       },
       (error) => {
         var status = error.response.status
         setTestname([]);
         console.log(status);
       }
     );
  }

  const handlechange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
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

  const handleSubmit=(event)=>{
    event.preventDefault();

    axios.post('https://care360-net-dev.azurewebsites.net/api/UesrTest/AddUserTest', UserTestData, {
      headers: {
        "Content-type": "Application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDAwNTcwZTMtYmUzMS00MWI3LWIzNjctZWFlMzBlMjdkNzUxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiI4ODk5ODk5MjQ5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6Iis5MSIsImp0aSI6IjFmMWY3Yjc2LTlhYzQtNDA0YS05MTNjLTA4NzZkNDQ4MTViMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFzc29jaWF0ZSIsImV4cCI6MTY1OTUwNzE4NiwiaXNzIjoiQWxhVGVjaCIsImF1ZCI6ImNhcmUzNjBDbGllbnQifQ.lXMSTmEuwxbe-1MEm3tdoMmwHzhm8XKSMOjmimI78SM`
        }   
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })

    props.settoggle(false);
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
          <input type="date" name="testDate" value={UserTestData.testDate || ""} onChange={handlechange} />
          <input type="time" name="testTime" value={UserTestData.testTime || ""} onChange={handlechange}  />

          <label>Upload image</label>
          <div className='upload-test-report'>
            <p>Upload test report</p>
            <label htmlFor="icon-button-file">
              <PhotoCamera color="primary" size="small" aria-label="upload picture" />
              <InsertPhotoIcon color="primary" size="small" aria-label="upload picture" />
            </label>
          </div>

          <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default AddNewTest