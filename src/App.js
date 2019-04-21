import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina/Disciplina'

import Modelagem from './components/docs/Modelagem/Modelagem'

const App = () => {

  return (
    <Router>
      <NavBar>
        <Switch>
          
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/Disciplina" component={ Disciplina }/>
          <Route exact path="/Pre-Rastreabilidade"/> 
          <Route exact path="/Pos-Rastreabilidade"/> 
          <Route exact path="/Elicitacao"/> 
          <Route exact path="/Modelagem" component={ Modelagem }/> 
          <Route exact path="/Analise"/> 
          <Route exact path="/Sobre"/> 
        
          {/* Modelagem */}
          <Route path="/Modelagem/Lexicos" component={ Disciplina }/>
          <Route path="/Modelagem/Cenarios" component={ Disciplina }/>


        </Switch>
      </NavBar>
    </Router>
  )
}

export default App
