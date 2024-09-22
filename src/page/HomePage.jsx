import React from 'react'

import "../css/HomePageStyle.css"
import MoveNextHome from '../components/MoveNextHome'


function HomePage() {
  return (
    <div id='home-box'>
        <div id='hb-1' className='k2d-light grey-text'>We are:</div>
        <div id='hb-2' className='italianno-regular'>TheAlphaOnes</div>
        <div id='hb-3' className='k2d-light grey-text'>Contrary to Popular Belief, <br /> I Know Exactly What I'm Doing.</div>
        <MoveNextHome />
    </div>
  )
}

export default HomePage