import React from 'react'

import FlowBar from "../assets/flow-bar-full.png"

import "../css/ContactPageStyle.css"
// import Marquee from 'react-fast-marquee'
import subBarimg from "../assets/subBarCon.png"
import swerlVerBar from "../assets/swerlVerBar.png"

import IconDiscord from "../assets/iconDiscord.png"
import IconMail from "../assets/iconMail.png"
import IconInsta from "../assets/iconInsta.png"
import IconYoutube from "../assets/iconYt.png"
import IconTwitter from "../assets/iconTwitter.png"
import iconGithub from "../assets/iconGithub.png"

function ContactIcon({ icon, url, nameg }) {
  return (
    <a id='nex-ments' target='_blank' style={{
      textDecoration: 'none', color: 'white'
    }} href={url}>

      <img id='nex-ments-img' src={icon} alt="" />
      <div id='nex-ments-text'>{nameg}</div>

    </a>
  )
}

function ContactPage() {
  return (
    <div id='contact-box' >
      <div id='journal-box-head'>
        <div id='journal-box-title'>Nexus</div>
        <div className='galti'>
          <div id='journal-box-sub'><img id='journal-box-sub-img' src={subBarimg} alt="" /> <div id='journal-box-sub-head'>Please no gang signs. No, throw it up. I'm kidding.</div></div>
        </div>
      </div>


      <div id='con-box'>

        <div id='img-box-cont'><img src={swerlVerBar} style={{filter:'invert(0.66)'}} alt="" /></div>
        <div id='con-box-elements'>

          <ContactIcon url={"https://github.com/TheAlphaOnes"} icon={iconGithub} nameg={"Github"} />

          <ContactIcon url={"https://discord.com/invite/nbrFDHmsK3"} icon={IconDiscord} nameg={"Discord"} />
          <ContactIcon url={"https://twitter.com/TheNormVg"} icon={IconTwitter} nameg={"Twitter"} />
          <ContactIcon url={"mailto:thealphaones.work@gmail.com"} icon={IconMail} nameg={"Mail"} />
          <ContactIcon url={"https://instagram.com/thenorm.vg"} icon={IconInsta} nameg={"Instagram"} />

          <ContactIcon url={"https://www.youtube.com/@thenormvg"} icon={IconYoutube} nameg={"Youtube"} />


        </div>
      </div>

      <div id='cb-mid-bar'>
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />

        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />

        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />

        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />

        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
        <img src={FlowBar} style={{filter:'invert(0.66)'}} alt="" />
      </div>


    </div>
  )
}

export default ContactPage