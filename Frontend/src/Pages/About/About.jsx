import React from 'react'
import './About.css'
import AboutWho from '../../Components/AboutWho/AboutWho'
import AboutTrusted from '../../Components/AboutTrusted/AboutTrusted'
import AboutBreadCrum from '../../Components/AboutBreadCrum/AboutBreadCrum'
import AboutWhy from '../../Components/AboutWhy/AboutWhy'
import AboutOurTeam from '../../Components/AboutOurTeam/AboutOurTeam'
import AboutQuestions from '../../Components/AboutQuestions/AboutQuestions'

const About = () => {
  return (
    <div>
      <AboutBreadCrum/>
      <AboutWho/>
      <AboutTrusted/>
      <AboutWhy/>
      <AboutOurTeam/>
      <AboutQuestions/>

    </div>
  )
}

export default About