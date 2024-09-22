import React from 'react'
import flowHome from "../assets/flow-home.png"

import "../css/MoveNextHomeStyle.css"

function MoveNextHome() {
  
  return (
    <div  id="movenext" >
      <a href="#intro-box">
        <img src={flowHome} alt="" />
      </a>
    </div>
  )
}

export default MoveNextHome