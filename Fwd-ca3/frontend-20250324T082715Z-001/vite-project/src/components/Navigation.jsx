import React from 'react'
import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/item">Item</NavLink>
    </>

  )
}

export default Navigation
