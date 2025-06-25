import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_photo from '../../assets/profile_photo.jpg'
const About = () => {
  return (
    <div id='about'className='about'>
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_photo} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Sowmya, a Frontend Developer with a background in Computer Science. I love crafting clean, interactive UIs and exploring new web technologies. Constantly learning, endlessly curious — turning ideas into pixel-perfect experiences is my favorite kind of magic. </p>
                    <p></p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                     <div className="about-skill"><p>React Js</p><hr style={{width:"55%"}}/></div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                       <div className="about-skill"><p>Java</p><hr style={{width:"75%"}}/></div>
                        <div className="about-skill"><p>C</p><hr style={{width:"60%"}}/></div>
                         
                </div>
            </div>
        </div>



        </div>
  )
}

export default About
