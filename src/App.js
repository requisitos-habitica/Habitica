import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina'

const App = () => {

  return (
    <Router>
      <NavBar>
        <Switch>
          
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/Disciplina" component={ Disciplina }/>
          <Route exact path="/Pre-Rastreabilidade"/> 
          <Route exact path="/Pos-Rastreabilidade"/> 
          <Route exact path="/Elicitação"/> 
          <Route exact path="/Modelagem"/> 
          <Route exact path="/Analise"/> 
          <Route exact path="/Sobre"/> 

          
        </Switch>
      </NavBar>
    </Router>
  )
}

export default App
