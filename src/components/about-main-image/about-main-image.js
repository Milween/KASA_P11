import React from "react"

import "./about-main-image.css"
import AboutbannerImage from "../../assets/about-background.png"

const MainImageBanner = () => {//adds up the image component 
    return (
        <main className="main-image-banner">
            <div className="main-image-container">
                <img className="landscape-banner" src={AboutbannerImage} alt="banner-img" />
            </div>
        </main>
    )
  }

export default MainImageBanner