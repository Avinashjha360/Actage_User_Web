import React from 'react'
import { Outlet} from "react-router-dom";

function Right() {
  return (
    <div className="right">
          <Outlet />
    </div>
  )
}

export default Right