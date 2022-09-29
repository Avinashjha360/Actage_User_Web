import axios from "axios";

const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: 'https://care360-net-dev.azurewebsites.net/api',
    timeout: 100000,
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": 'Bearer '+token+''
        } 
})


// Add a request interceptor
api.interceptors.request.use(function (config) {
 
  if(config.url!="/TestCategory/GetTestCategories")
    document.getElementById('overlay').style.display='block';
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    document.getElementById('overlay').style.display='none';
    return response;
  }, function (error) {
    document.getElementById('overlay').style.display='none';
    return Promise.reject(error);
  });
export default api;