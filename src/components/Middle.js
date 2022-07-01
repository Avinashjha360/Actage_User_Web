import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import HealthBook from './pages/HealthBook';
import Nopage from './pages/Nopage';



const Middle = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Sidebar />}>
          <Route index element={<HealthBook />} />
          <Route path="/HealthBook" element={<HealthBook />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Middle