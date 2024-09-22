import React from 'react'
import Marquee from "react-fast-marquee";

import "../css/JournalPageStyle.css"

import UpWave from "../assets/up-wave.png"
import DownWave from "../assets/down-wave.png"

import subBarimg from "../assets/arrow-line-journal.png"
import JournalCard from '../components/JournalCard';
import MoveNextContacts from '../components/MoveNextContacts';

function JournalPage() {
  return (
    <div id='journal-box'>
      <div id='journal-box-head'>
        <div id='journal-box-title'>Journal</div>
        <div id='journal-box-sub'><img id='journal-box-sub-img'  src={subBarimg} alt="" /> <div id='journal-box-sub-head'>No Amount of Money Ever Bought a Second of Time.</div></div>
      </div>


      <div id='journal-blog-box'>
        <img id='jorunal-border-img' src={UpWave} alt="" />
        <div id='journal-blog-box-inner'>

        <Marquee gradient={true} gradientColor={"black"} speed={35} pauseOnHover={true}>
        <div id='journal-blog-box-inner-line'>
        <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
        </div>
          
        </Marquee>

        <Marquee gradient={true} gradientColor={"black"} speed={55} pauseOnHover={true}>
        <div id='journal-blog-box-inner-line'>
        <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
          <JournalCard/>
        </div>
          
        </Marquee>

        </div>
        <img id='jorunal-border-img' src={DownWave} alt="" />
        <div id='journal-real-all'><a href="/blogs"> Read All </a></div>
      </div>

      <MoveNextContacts/>
      
    </div>
  )
}

export default JournalPage