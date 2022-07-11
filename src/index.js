import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Middle from './components/Middle';
import HealthBook from './components/HealthBook/HealthBook';
import NoPage from './components/NoPage';
import ViewMore from './components/HealthBook/ViewMore';

const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Middle />}>
          <Route index path="/HealthBook" element={<HealthBook />} />
          <Route path="/HealthBook/:ViewMore" element={<ViewMore />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Router />
  </React.StrictMode>
);

reportWebVitals();
