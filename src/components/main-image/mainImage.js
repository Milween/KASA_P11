import React from "react"

import "./mainImage.css"
import bannerImage from "../../assets/IMG.png"

const MainImage = () => {//adds up the image component 
    return (
        <main className="Homepage">
            <div className="main-image-banner">
                <img className="landscape-banner" src={bannerImage} alt="banner-img" />
                <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
            </div>
      </main>
    )
  }

export default MainImage
