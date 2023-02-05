import React from "react"

import { Link } from 'react-router-dom'
import "./locationThumbnail.css"

function LocationThumbnail ({ id, titre, cover }) {//adds up the homepage component 
    return (
        <Link to={`/hotels/${id}`}>
            <figure>
                <img src={cover} alt='location-illustration' />
                <figcaption> {titre} </figcaption>
            </figure>
      </Link>
    )
  }

export default LocationThumbnail