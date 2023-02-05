import React, { useEffect, useState } from 'react'
import '../../index.css'
import { BrowserRouter } from 'react-router-dom'

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Router from '../../components/Router/router' 

function App() {
  const [locationList, setLocationList] = useState([])
  useEffect(() => {
    fetch('/hotels.json')
    .then(response => response.json())
    .then(locations => {
      setLocationList(locations)
      // console.log(locations);
    })
  }, [])
  return (
    <BrowserRouter>
    <Header />
    <Router locationList={ locationList }/>
    <Footer />
  </BrowserRouter>
  )
}

export default App