import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login?sort=asc' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes