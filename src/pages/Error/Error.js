import React from "react"
import { Link } from "react-router-dom";

import "./Error.css"

const Error = () => {//adds up the error component 
    return (
        <div className="ErrorBloc">
            <h1>404</h1>
            <h2> oups ! La page que vous demandez n'existe pas </h2>
            <div className="linkBack">
                <Link to="/" className="error-link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    )
  }
export default Error