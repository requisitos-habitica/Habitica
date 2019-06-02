import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina/Disciplina'

import Modelagem from './components/docs/Modelagem/Modelagem'
import Lexico from './components/docs/Modelagem/Lexico/Lexico'
import Cenario from './components/docs/Modelagem/Cenario/Cenario'
import PreRastreabilidade from './components/docs/PreRastreabilidade/PreRastreabilidade'

import lexicos from './utils/lexicos'
import cenarios from './utils/cenarios'

import ScrollToTop from './components/HOC/ScrollToTop/ScrollToTop'

const App = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <NavBar>
          <Switch>
            
            <Route exact path="/" component={ LandingPage } onUpdate={() => window.scrollTo(0, 0)} />
            <Route exact path="/Disciplina" component={ Disciplina } onUpdate={() => window.scrollTo(0, 0)} />
            <Route exact path="/Pre-Rastreabilidade" component={ PreRastreabilidade }onUpdate={() => window.scrollTo(0, 0)} /> 
            <Route exact path="/Pos-Rastreabilidade" onUpdate={() => window.scrollTo(0, 0)} /> 
            <Route exact path="/Elicitacao" onUpdate={() => window.scrollTo(0, 0)} /> 
            <Route exact path="/Modelagem" component={ Modelagem } onUpdate={() => window.scrollTo(0, 0)} /> 
            <Route exact path="/Analise" onUpdate={() => window.scrollTo(0, 0)} /> 
            <Route exact path="/Sobre" onUpdate={() => window.scrollTo(0, 0)} /> 
          
            {/* Modelagem */}
            <Route path="/Lexicos" component={ Lexico }/>
            <Route path="/Cenarios" component={ Cenario }/>

            {Object.keys(lexicos).map(group => 
              Object.keys(lexicos[group].lexic).map(term => <Route  key={ term } exact 
                                                                    path={`/${term}`}
                                                                    component={ lexicos[group].lexic[term] }
                                                                    onUpdate={() => window.scrollTo(0, 0)}/>))}

            {Object.keys(cenarios).map(group => 
              Object.keys(cenarios[group].lexic).map(term => <Route key={ term } exact 
                                                                    path={`/${term}`}
                                                                    component={ cenarios[group].lexic[term] }
                                                                    onUpdate={() => window.scrollTo(0, 0)}/>))}
          </Switch>
        </NavBar>
      </ScrollToTop>
    </Router>
  )
}

export default App
