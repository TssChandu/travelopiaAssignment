import React,{Component} from 'react'
import Header from '../Header'
import TouristContext from '../../TouristContext/travelerContext'
import './index.css'

class Admin extends Component {
  
  render(){
  return(
    <div className='bg-container'>
      <Header/>
      <div className='admin-page'>
      <h1>Travelers Details</h1>
      {<TouristContext.Consumer>
      {value => {
        const {travelerList} = value
        console.log(travelerList)
          return(
            <div className='tourist-list-container'>
              {travelerList.map(eachList => (
                <div key={eachList.id} className='traveler-card'>
                  <p><b>Name :</b> {eachList.nameInput}</p>
                  <p><b>Phone No :</b> {eachList.phNumInput}</p>
                  <p><b>Email :</b> {eachList.emailInput}</p>
                  <p><b>Days Travel :</b> {eachList.daysInput}</p>
                  <p><b>From Date :</b> {eachList.fromDateInput}</p>
                  <p><b>Country to Travel :</b> {eachList.country}</p>
                  <p><b>Budget Per Person :</b> {eachList.budget}</p>
                  <p><b>No. of Travelers :</b> {eachList.travelers}</p>
                  <p><b>Interest :</b> {eachList.interest}</p>
                </div>
              ))}
            </div>
          )
      }}
    </TouristContext.Consumer>}
      </div>
    </div>
  )}
}

export default Admin