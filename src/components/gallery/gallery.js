import React from "react";
import { useState } from "react";

import "./gallery.css"

const Gallery = ({pictures}) => {//adds up the gallery component 
    const [currentIndex, setCurrentIndex] = useState(0)
    const previousImage = () => {
        const isFirstImage = currentIndex === 0
        const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
      }  
    const nextImage = () => {
        const isLastImage = currentIndex === pictures.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      } 
    // console.log(pictures)
    return (   
        <div className="gallery">
            {pictures?.length > 1 ?<div className="left"onClick={previousImage}>
                <i className="fa-solid fa-4x fa-chevron-left"></i>
            </div> : ""}
            <img src={pictures[currentIndex]} alt="location-illustration"/>
            {pictures?.length > 1 ? <div className="right" onClick={nextImage}>
                <i className="fa-solid fa-4x fa-chevron-right"></i>
            </div>: ""}
            <div className="picture-number">
              {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    )
  }
export default Gallery