import React from 'react'
import './Hero.scss'
import habiticaLogo from '../../../../assets/hero-logo.png'

const Hero = () => (
  <header className="hero">
    <img className="hero__logo" src={ habiticaLogo } alt="Logo do Habitica"/>
  </header>  
)

export default Hero