import React,{useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import TouristContext from './TouristContext/travelerContext'
import Home from './components/Home'
import Admin from './components/Admin'
import './App.css'

const App = () => {
    const storedTravelerList = JSON.parse(localStorage.getItem("travelList"))
    const [travelerList,setTouristList] = useState(storedTravelerList !== null ? storedTravelerList: [])

    const setList = (updatedList) => {
      localStorage.setItem("travelList",JSON.stringify([...travelerList,...updatedList]))
      setTouristList([...travelerList,...updatedList])
    }
    console.log(travelerList)

    return(
        <TouristContext.Provider value={{travelerList,setList:setList}}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/admin" component={Admin}/>
          </Switch>
        </TouristContext.Provider>
        
  )}

export default App