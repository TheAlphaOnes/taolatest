import React, { useContext } from 'react'

import defImg from "../assets/def-prog.png"
import RoseBarVer from "../assets/rose-bar-ver.png"
import LineDot from "../assets/right-line-dot.png"
import OpenLink  from "../assets/open-link.png"
import "../css/ProjectFullStyle.css"
import { ProgFullDataContext } from '../context/ProgFullDataContext'

function ProjectFull() {

  const contextFullData = useContext(ProgFullDataContext)

  return (
    <div id='prog-full-box'>
        <img id='prog-full-box-thumb' src={contextFullData.ProgFullData.imag} alt="" />

        <img id='prog-full-box-rose' src={RoseBarVer} alt="" />

        <div id='prog-full-box-info'>

            <div id='prog-full-box-title'> 
             <a href={contextFullData.ProgFullData.link}> {contextFullData.ProgFullData.title} <img id='prog-full-open-link' src={OpenLink} alt="" /></a>
             <img id='prog-full-dot-line' src={LineDot} alt="" />
             </div>
            
            <div id='prog-full-box-con'>{contextFullData.ProgFullData.content}</div>

        </div>
    </div>
  )
}

export default ProjectFull