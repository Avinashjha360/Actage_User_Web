import React from 'react'
import { Link, Outlet } from "react-router-dom";
import './style/home.css'
import Topnav from './Topnav';

const navList = [
  { name: "Dashboard", path: "/", imgurl: "images/tableh1.png" },
  { name: "Doctor", path: "/Doctor", imgurl: "images/tableh2.png" },
  { name: "Hospital", path: "/Hospital", imgurl: "images/tableh3.png" },
  { name: "Pharmacy", path: "/Pharmacy", imgurl: "images/tableh4.png" },
  { name: "Ambulance", path: "/Ambulance", imgurl: "images/tableh5.png" },
  { name: "Diagnostic", path: "/Diagnostic", imgurl: "images/tableh6.png" },
  { name: "Health Book", path: "/HealthBook", imgurl: "images/tableh7.png" }
];
function Home() {
  return (
    <>
      <Topnav />

      <div className="s-layout">
        {/* <!-- Sidebar --> */}
        <div className="s-layout__sidebar">
          <nav className="s-sidebar__nav">
            <label>Main</label>
            <ul>
            {navList.map((item, index) => {
                return (
                   <li  key={index}>
                   <Link to={item.path} className="s-sidebar__nav-link" href="#0">
                     <i><img src={item.imgurl} alt="logo" /></i><em>{item.name}</em>
                   </Link>
                 </li>
                )
              })
              }
            </ul>
          </nav>
        </div>

        {/* <!-- Content --> */}
        <main className="s-layout__content">
          <div id="overlay">
            <div className="loader">Loading.</div>
          </div>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Home