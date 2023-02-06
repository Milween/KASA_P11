import React from "react"
import { NavLink, Link } from "react-router-dom"

import "./header.css"
import kasaLogo from "../../assets/logo.png"

const Header = () => {
      return (
      <header>
        <Link to="/">
          <img className="kasaLogo" src={kasaLogo} alt="KasaLogo" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
              'headerLink' + (isActive ? ' souligner' : '')
            }
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                'headerLink' + (isActive ? ' souligner' : '')
              }
                to="/about"
              >
                &Agrave; propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      )
    }

  export default Header