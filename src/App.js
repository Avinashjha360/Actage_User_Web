import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {PrivateRoute1, PrivateRoute2} from './components/PrivateRoute';
import Home from './components/Home'
import Login from './components/Login';
import HealthBook from './components/HealthBook/HealthBook';
import ViewMore from './components/HealthBook/ViewMore';
import NoPage from './components/NoPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PrivateRoute1>
              <Home />
            </PrivateRoute1>
          }>
            <Route path="HealthBook" element={<HealthBook />} />
            <Route path='HealthBook/:TestName' element={<ViewMore />} />
            <Route path='*' element={<NoPage />} />
          </Route>
          <Route path='/login' element={  <PrivateRoute2>
              <Login />
            </PrivateRoute2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
