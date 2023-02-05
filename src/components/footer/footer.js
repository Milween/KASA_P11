import React from "react";
import { Link } from "react-router-dom"

import './footer.css'
import kasalogowhite from '../../assets/white_logo_footer.png'

const Footer = () => {//Create a footer frame
  return (
    <footer>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img src={kasalogowhite} alt="KasaLogoWhite" />
      </Link>
      
      <p>2021 Kasa. Tous droits réservés</p>
    </footer>
  )
}

export default Footer