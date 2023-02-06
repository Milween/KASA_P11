import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import "./LocationDetail.css"
import Gallery from "../../components/gallery/gallery"
import TagsGenerator from "../../components/tagsGenerator/tagsGenerator"
import Collapse from "../../components/collapse/collapse"
// import locationList  from "../../data/hotels.json"
import StarsRating from "../../components/starsRating/starsRating"
import Error from "../Error/Error"

const LocationDetail = ( { locationList } ) => {

  const { locationID } = useParams()
  const [locationSelected, setLocationSelected] = useState()
  //const locationSelected = locationList.find((location) => location.id === locationID)
  useEffect(() => {
    setLocationSelected(locationList.find((location) => location.id === locationID))
  }, [setLocationSelected, locationID, locationList])
  if (!locationSelected){
    return (
      <Error/>
      )
  } else {
    const { title, location, equipments, description, rating } = locationSelected
    // console.log(equipments)
    return (
      <div className="location">
        <Gallery pictures={locationSelected?.pictures}/>
        <div className="locationChecked">
          <div className="locationDetails">
            <h1 className="locationName">{title}</h1>
            <p className="locationPlace">{location}</p>
            <div className="locationTags">
              {locationSelected.tags.map((tag, index) => (
                <TagsGenerator key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="locationLandlord">
            <h3>{locationSelected?.host.name}</h3>
            <img className='landlordPicture' src={locationSelected?.host.picture} alt={locationSelected?.host.name}/>
          </div>
          <div className='locationRating'>
            <StarsRating rating={rating} />
          </div>
        </div>
        <div className="equip-dropdowns">
          <Collapse label="Description" >
            <p>{description}</p> 
          </Collapse> 
          <Collapse label="Equipement"> 
            <ul>
              {equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>
              })}
              </ul>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default LocationDetail