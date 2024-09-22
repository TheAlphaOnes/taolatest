import React, { useContext } from 'react'

import "../css/ProgPageStyle.css"
import "../css/AuraPageStyle.css";
import rightArrow from "../assets/right-arrow-line-3.png";
import ProjectCard from '../components/ProjectCard';

import progBoxLeft from "../assets/prog-box-left.png"
import progBoxRight from "../assets/prog-box-right.png"
import MoveNextTeam from '../components/MoveNextTeam';
import { ProgFullContext } from '../context/ProgFullContext';
import ProjectFull from '../components/ProjectFull';

import Marquee from "react-fast-marquee";

function ProgPage() {
  
  const ContextProgFull = useContext( ProgFullContext)

  return (
    <div id='prog-box'>
      <div id="prog-box-title-box">
        <div id="prog-box-title">Solutions We  Build</div>
        <div id="prog-box-title-img-box">
          <img id="prog-box-title-img" src={rightArrow} alt="" />
          <div className='haan-what-is-the-point'> What Is The Point Of Owning A Race Car If You Can’t Drive It?</div>
        </div>
      </div>

        {ContextProgFull.ProgFullValue ? <ProjectFull/> : <></>}

        <div id='pojects-box'>
            <img id='pojects-box-side' src={progBoxLeft}  />
            
  

            <div id='prog-box-inner'>
            <Marquee gradient={true} gradientColor={"black"} speed={35} pauseOnHover={true}>
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />

            </Marquee>
            <Marquee gradient={true} gradientColor={"black"}  pauseOnHover={true}>
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 1" imag="test.png" link="https://github.com/TheAlphaOnes" content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
            <ProjectCard title="Title 2"  link="https://github.com/TheAlphaOnes" content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur." disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />

            </Marquee>
            </div>
            
            <img id='pojects-box-side' src={progBoxRight}  />
        </div>


        <MoveNextTeam/>
    </div>
  )
}

export default ProgPage