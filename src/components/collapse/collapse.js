//this file creates the collapsing event that occurs on click on the option
import React, {useState} from "react"

import "./collapse.css"

function Collapse (props) {
    const[isOpen, setIsOpen]=useState(false)

    return (
        <div className="collapse-item">
            <button className={`toggle${isOpen ? " toggle-open":""}`} onClick={()=> setIsOpen(!isOpen)} >{props.label}
                <div className="arrowUp">
                <i className='fas fa-chevron-up'/>
                </div>
            </button>

            {isOpen && <div className="content-display">{props.children}</div>}
        </div>
    )
}

export default Collapse