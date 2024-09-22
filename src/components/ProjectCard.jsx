import React, { useCallback, useContext } from 'react'

import DefProg from "../assets/def-prog.png"

import "../css/ProjectCardStyle.css"
import { ProgFullContext } from '../context/ProgFullContext'
import { ProgFullDataContext } from '../context/ProgFullDataContext'

function ProjectCard({title,content,link,imag,disc}) {

  const contextProgFull = useContext(ProgFullContext)
  const contextProgFullData = useContext(ProgFullDataContext)

  let thumb = imag ? require(`../assets/${imag}`)  : DefProg

  function ShowProjectFull(){
    contextProgFull.setProgFullValue(true)
    contextProgFullData.setProgFullData({
      "title":title,
      "content":content,
      "link":link,
      "imag":thumb
    })  
    
  }

  


  return (
    <div id='project-card' onClick={ ()=>{ShowProjectFull()} }>
      <span id='prog-card-info'>
        <div id='prog-card-title'>{title}</div>
        <div id='prog-card-con'>{disc}</div>
        </span>
        <img src={ thumb } alt="" />
    </div>
  )
}

export default ProjectCard