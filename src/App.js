import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {

  return (
    <Router>
      <NavBar>
        <Switch>
          
          <Route exact path="/" component={ LandingPage }/>  
          <Route exact path="/Disciplina"/>  
          
        </Switch>
      </NavBar>
    </Router>
  )
}

export default App
