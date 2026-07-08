import React from 'react'
import './About.css'
import AboutWho from '../../Components/AboutWho/AboutWho'
import AboutTrusted from '../../Components/AboutTrusted/AboutTrusted'
import AboutBreadCrum from '../../Components/AboutBreadCrum/AboutBreadCrum'
import AboutWhy from '../../Components/AboutWhy/AboutWhy'

const About = () => {
  return (
    <div>
      <AboutBreadCrum/>
      <AboutWho/>
      <AboutTrusted/>
      <AboutWhy/>
      
    </div>
  )
}

export default About