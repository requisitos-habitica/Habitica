import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina/Disciplina'

import Modelagem from './components/docs/Modelagem/Modelagem'
import Lexico from './components/docs/Modelagem/Lexico/Lexico'
import Cenario from './components/docs/Modelagem/Cenario/Cenario'

import lexicos from './utils/lexicos'
import cenarios from './utils/cenarios'

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
          <Route path="/Modelagem/Lexicos" component={ Lexico }/>
          <Route path="/Modelagem/Cenarios" component={ Cenario }/>

          {Object.keys(cenarios).map(group => 
            Object.keys(cenarios[group].lexic).map(term => <Route key={ term } exact 
                                                                  path={`/ModelagemCenarios/${term}`}
                                                                  component={LandingPage}/>))}
          {Object.keys(lexicos).map(group => 
            Object.keys(lexicos[group].lexic).map(term => <Route key={ term } exact 
                                                                  path={`/ModelagemLexicos/${term}`}
                                                                  component={Disciplina}/>))}


        </Switch>
      </NavBar>
    </Router>
  )
}

export default App
