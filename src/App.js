import React from 'react'
import './App.scss'
import { configureFirebase } from './utils/firebaseUtils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/HOC/ScrollToTop/ScrollToTop'

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
import NFR from './components/docs/Modelagem/NFR/nfr'
import NFRV1 from'./components/docs/Modelagem/NFR/nfrv1'
import NFRV2 from'./components/docs/Modelagem/NFR/nfrv2'
import NFRV3 from'./components/docs/Modelagem/NFR/nfrv3'

import GIFSComponent from './components/docs/PosRastreabilidade/GIFS'
import GIFS from './components/docs/PosRastreabilidade/GIFS.json'

import Priorizacao from './components/docs/Elicitacao/Priorizacao'
import Requisitos from './components/docs/Elicitacao/Requisitos'
import BrainstormV1 from './components/docs/Elicitacao/Brainstorm/BrainstormV1'
import BrainstormV2 from './components/docs/Elicitacao/Brainstorm/BrainstormV2'
import Entrevistas from './components/docs/Elicitacao/Entrevistas/Entrevistas'
import Entrevista01 from './components/docs/Elicitacao/Entrevistas/Entrevista01'
import Entrevista02 from './components/docs/Elicitacao/Entrevistas/Entrevista02'
import Etnografia from './components/docs/Elicitacao/Etnografia'
import Introspeccao from './components/docs/Elicitacao/Introspeccao'
import i5W2H from './components/docs/Elicitacao/5W2H'
import Analise01 from './components/docs/Elicitacao/AnaliseProtocolo/Analise01'
import Analise02V1 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02V1'
import Analise02 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02'
import MoSCoW from './components/docs/Elicitacao/MoSCoW'
import FirstThingsFirst from './components/docs/Elicitacao/FirstThingsFirst'
import HOQ from './components/docs/Elicitacao/HOQ'

import CasosDeUso from './components/docs/Modelagem/CasosDeUso/CasosDeUso'
import Diagramas from './components/docs/Modelagem/CasosDeUso/Diagramas'
import CasosObj from './components/docs/Modelagem/CasosDeUso/CasosDeUsoObj'
import CasoDeUsoBase from './components/docs/Modelagem/CasosDeUso/CasoDeUsoBase'
import EspecificacaoSuplementar from './components/docs/Modelagem/EspecificacaoSuplementar'
import Backlog from './components/docs/Modelagem/Agil/Backlog'


import StoryTelling01 from './components/docs/Elicitacao/StoryTelling01'
import StoryTelling01V1 from './components/docs/Elicitacao/StoryTelling01V1'
import StoryTelling02 from './components/docs/Elicitacao/StoryTelling02'
import Analise from './components/docs/Analise/Analise'
import Verificacao from './components/docs/Analise/Verificacao'

const RouteRollUp = props => <Route {...props} onUpdate={() => window.scrollTo(0, 0)}/>

const App = () => {

  configureFirebase()
  
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
            <RouteRollUp exact path="/Modelagem" component={ Modelagem } />
            <RouteRollUp exact path="/Analise" component={ Analise } />
            <RouteRollUp exact path="/Sobre" />
            <RouteRollUp exact path="/GIFS" component={ GIFS } />

            {/* Elicitação */}
            <RouteRollUp exact path="/RequisitosElicitacao" component={ Requisitos } />

            <RouteRollUp exact path="/AnaliseProtocolo01" component={ Analise01 } />
            <RouteRollUp exact path="/AnaliseProtocolo02V1" component={ Analise02V1 } />
            <RouteRollUp exact path="/AnaliseProtocolo02" component={ Analise02 } />
            <RouteRollUp exact path="/BrainstormV1" component={ BrainstormV1 } />
            <RouteRollUp exact path="/Brainstorm" component={ BrainstormV2 } />
            <RouteRollUp exact path="/Entrevista" component={ Entrevistas } />
            <RouteRollUp exact path="/Entrevista/01" component={ Entrevista01 } />
            <RouteRollUp exact path="/Entrevista/02" component={ Entrevista02 } />
            <RouteRollUp exact path="/Etnografia" component={ Etnografia } />
            <RouteRollUp exact path="/Introspeccao" component={ Introspeccao } />
            <RouteRollUp exact path="/Persona" component={ Requisitos } />
            <RouteRollUp exact path="/Storytelling01V1" component={ StoryTelling01V1 } />
            <RouteRollUp exact path="/Storytelling01" component={ StoryTelling01 } />
            <RouteRollUp exact path="/Storytelling02" component={ StoryTelling02 } />
            <RouteRollUp exact path="/Questionario" component={ Requisitos } />
            <RouteRollUp exact path="/5W2H" component={ i5W2H } />


            <RouteRollUp exact path="/Priorizacao" component={ Priorizacao } />

            <RouteRollUp exact path="/HOQ" component={ HOQ } />
            <RouteRollUp exact path="/FirstThingsFirst" component={ FirstThingsFirst } />
            <RouteRollUp exact path="/MoSCoW" component={ MoSCoW } />
          
            {/* Modelagem */}
            <RouteRollUp path="/Lexicos" component={ Lexico }/>
            <RouteRollUp path="/Cenarios" component={ Cenario }/>
            <RouteRollUp path="/CasosDeUso" component={ CasosDeUso }/>
            <RouteRollUp path="/EspecificacaoSuplementar" component={ EspecificacaoSuplementar }/>
            <RouteRollUp path="/Agil" component={ Lexico }/>
            <RouteRollUp path="/Backlog" component={ Backlog }/>
            <RouteRollUp path="/NFR" component={ NFR }/>
            <RouteRollUp path="/NFR V1" component={ NFRV1 }/>
            <RouteRollUp path="/NFR V2" component={ NFRV2 }/>
            <RouteRollUp path="/NFR V3" component={ NFRV3 }/>
            <RouteRollUp path="/IStar" component={ Lexico }/>


            {/* Analise */}
            <RouteRollUp path="/Verificacao" component={ Verificacao }/>
            <RouteRollUp path="/Validacao" component={ Cenario }/>


            {/* Automatizando várias rótas */}
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


            {
              Object.keys(CasosObj).map(casos => <Route path={`/CasosDeUso${casos}`}
                                                       render={() => <CasoDeUsoBase info={CasosObj[casos]} title={casos} />}/>)
                                                      }

            {Object.keys(CasosObj).map(casos => 
              CasosObj[casos].images.map((image, i) => <Route path={`/DiagramasCasoUso/${casos}/V${i+1}`}
                                                              render={() => <Diagramas title={`${casos} V${i+1}`}  author={CasosObj[casos].author} image={image} x={CasosObj[casos].x} y={CasosObj[casos].y}/>} />)
            )}

          </Switch>
        </NavBar>
      </ScrollToTop>
    </Router>
  )
}

export default App
