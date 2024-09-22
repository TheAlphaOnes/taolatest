import React from 'react'

import headingBottomBorder from "../assets/heading-br.png"
import subBarimg from "../assets/grey-arrow-line-right.png"

import "../css/IntroPageStyle.css"
import BtBox from '../components/BtBox'
import MoveNextIntro from '../components/MoveNextIntro'

function IntroPage() {
  return (
    <div id='intro-box'>
        <div id='heading-intro'>
        Crafting Dreams, Defining Futures: 
        <div><img src={headingBottomBorder} alt="" /></div>
        </div>

        <div id='sub-head'>
        Who we are?
        <div id='heading-sub'><img src={subBarimg} alt="" /> Following’s Not Really My Style.</div>
        </div>


        <div id='intro-para'>
        At TheAlphaOnes,  we are not just a tech company; we are a manifestation of innovation  and passion, fueled by a profound love for technology. Specializing in  software development, hardware solutions, and game development, we are  at the forefront of crafting the future.
        </div>

        <div id='intro-bt-box'>
          <BtBox title="Vision" con="At TheAlphaOnes,  we are not just a tech company; we are a manifestation of innovation  and passion, fueled by a profound love for technology." />
          <BtBox title="Mission" con="At TheAlphaOnes,  we are not just a tech company; we are a manifestation of innovation  and passion, fueled by a profound love for technology." />
          <BtBox title="Values" con="At TheAlphaOnes,  we are not just a tech company; we are a manifestation of innovation  and passion, fueled by a profound love for technology." />
        </div>

        <MoveNextIntro/>
    </div>
  )
}

export default IntroPage