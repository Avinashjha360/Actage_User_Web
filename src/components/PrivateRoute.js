import React from 'react'
import {Navigate} from 'react-router-dom';


const PrivateRoute1 = ({ children }) => {
  const token =localStorage.getItem('token');
    if (token===null) {
      return <Navigate to="/login" replace />;
    }else{
      return children;
    }
    
  };
  const PrivateRoute2 = ({ children }) => {
    const token =localStorage.getItem('token');
      if (token!==null) {
        return <Navigate to="/" replace />;
      }else{
        return children;
      }
      
    };
export  {PrivateRoute1, PrivateRoute2}