import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="src/assets/profile_photo.jpg" alt="Sowmya" />
        <h1><span>I'm Sowmya Tiwari</span> Computer Science Graduate</h1>
        <p>I am an Aspiring Software Engineer.</p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <a href="/Sowmya_Tiwari_resume.pdf" download className="hero-resume">My resume</a>
        </div>
    </div>
  )
}

export default Hero
