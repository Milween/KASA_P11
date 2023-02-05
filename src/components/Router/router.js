import React from 'react'
import '../../index.css'
import { Route, Routes, } from 'react-router-dom'

import Homepage from "../../pages/Homepage/Homepage" 
import About from "../../pages/About/About" 
import Error from "../../pages/Error/Error"
import LocationDetail from "../../pages/LocationDetail/LocationDetail"

function Router( { locationList } ) {
  return (
    <Routes>
    <Route path="/" element={<Homepage locationList={ locationList }/>}/>
    <Route path="about" element={<About />}/>
    <Route path="hotels/:locationID" element={<LocationDetail locationList={ locationList }/>}/>
    <Route path='/*' element={<Error />} />
  </Routes>
  )
}

export default Router