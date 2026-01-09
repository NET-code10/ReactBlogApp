import React from 'react'
import { Outlet } from 'react-router-dom'
const DashboardLayout = () => {
  return (
    <div>
      {/* childs here */}

      <Outlet/>
    </div>
  )
}

export default DashboardLayout
