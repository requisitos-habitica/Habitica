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
import RichPicture from './components/docs/PreRastreabilidade/RichPicture'
import Argumentacao from './components/docs/PreRastreabilidade/Argumentacao'
import Elicitacao from './components/docs/Elicitacao/Elicitacao'
import lexicos from './utils/lexicos'
import RoutesCenarios from './utils/RoutesCenarios'

import ScrollToTop from './components/HOC/ScrollToTop/ScrollToTop'

import GIFSComponent from './components/docs/PosRastreabilidade/GIFS'
import GIFS from './components/docs/PosRastreabilidade/GIFS.json'

const RouteRollUp = props => <Route {...props} onUpdate={() => window.scrollTo(0, 0)}/>

const App = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <NavBar>
          <Switch>
            
            <RouteRollUp exact path="/" component={ LandingPage } />
            <RouteRollUp exact path="/Disciplina" component={ Disciplina } />
            <RouteRollUp exact path="/Pre-Rastreabilidade" component={ PreRastreabilidade } />
            <RouteRollUp exact path="/RichPictures" component={ RichPicture } />
            <RouteRollUp exact path="/Argumentacoes" component={ Argumentacao } />
            <RouteRollUp exact path="/Pos-Rastreabilidade" />
            <RouteRollUp exact path="/Elicitacao" component={ Elicitacao }/>
            <RouteRollUp path="/Modelagem" component={ Modelagem } />
            <RouteRollUp path="/Analise" />
            <RouteRollUp path="/Sobre" />
            <RouteRollUp path="/GIFS" component={ GIFS } />
          
            {/* Modelagem */}
            <RouteRollUp path="/Lexicos" component={ Lexico }/>
            <RouteRollUp path="/Cenarios" component={ Cenario }/>

            {Object.keys(lexicos).map(group => 
              Object.keys(lexicos[group].lexic).map(term => <Route  key={ term } 
                                                                    path={`/${term}`}
                                                                    component={ lexicos[group].lexic[term] }
                                                                    onUpdate={() => window.scrollTo(0, 0)}/>))}

            {Object.keys(RoutesCenarios).map(group => 
              Object.keys(RoutesCenarios[group].lexic).map(term => <Route key={ term } 
                                                                          path={`/${term}`}
                                                                          component={ RoutesCenarios[group].lexic[term] }
                                                                          onUpdate={() => window.scrollTo(0, 0)}/>))}

            {GIFS.map( gif => <Route path = {`/gif/${gif.id}`}
                                     render={() => <GIFSComponent id={gif.id} description={gif.description} />}/>)}

          </Switch>
        </NavBar>
      </ScrollToTop>
    </Router>
  )
}

export default App
