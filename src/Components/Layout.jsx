import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <h1>Navbar</h1>
      <main><Outlet/></main>
      <h1>Footer</h1>
    </div>
  )
}

export default Layout
