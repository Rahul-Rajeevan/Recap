import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {auth}=useSelector((store)=>store.authentication)
  return auth?children:<Navigate to={"/login"}/>
}

export default PrivateRoute