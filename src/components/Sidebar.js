import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./style/sidebar.css";

const navList = [
  { name: "Doctor", path: "/Doctor", imgurl: "images/tableh2.png" },
  { name: "Hospital", path: "/Hospital", imgurl: "images/tableh3.png" },
  { name: "Pharmacy", path: "/Pharmacy", imgurl: "images/tableh4.png" },
  { name: "Ambulance", path: "/Ambulance", imgurl: "images/tableh5.png" },
  { name: "Diagnostic", path: "/Diagnostic", imgurl: "images/tableh6.png" },
  { name: "Health Book", path: "/HealthBook", imgurl: "images/tableh7.png" }
];

function Sidebar() {
  return (
    <>
      <nav>
        <label>Main</label>
        <ul className="nav flex-column">
          <li className="nav-item"><img src="images/tableh1.png" alt="logo" />Dashboard</li>

          {navList.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <img src={item.imgurl} alt="logo" />
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          })
          }
        </ul>
      </nav>
      <div className="table-outlet">
        <Outlet />
      </div>
    </>
  )
}

export default Sidebar