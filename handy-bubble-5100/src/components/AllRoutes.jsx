import { Route,Routes } from "react-router-dom"
  import React from 'react'
import Home from "./Home"
import Login from "./Login"
import Service from "./Service"
import Contact from "./Contact"
import Success from "./Success"

  function AllRoutes(){
    return <div>
         <Routes>
     <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>
      <Route path="/about-us" element={<h1>About Page</h1>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Success" element={<Success/>}/>
   </Routes>
   </div>
  }

  export default AllRoutes
  