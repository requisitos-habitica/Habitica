import React from 'react'
import './App.scss'
import Hero from './components/sections/Hero/Hero'
import AboutHabitica from './components/sections/AboutHabitica/AboutHabitica'
import Features from './components/sections/Features/Features'
import Contributors from './components/sections/Contributors/Contributors'
import NavBar from './components/HOC/NavBar/NavBar'

const App = () => {

  return (
    <NavBar>
      <Hero/>
      <AboutHabitica/>
      <Features/>
      <Contributors/>
    </NavBar>
  )
}

export default App;
