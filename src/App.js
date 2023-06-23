import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import './App.css'

const App = () => (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
  )

export default App