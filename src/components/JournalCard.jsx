import React from 'react'

import DefImg from "../assets/def-journal.png"

import "../css/JournalCardStyle.css"

function JournalCard() {
  return (
    <div id='journal-card'>
        
        <span id='jorunal-card-info'>
        <div id='journal-card-title'>Journal Title</div>
        <div id='journal-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </span>
        <img src={DefImg} alt="" />

    </div>
  )
}

export default JournalCard