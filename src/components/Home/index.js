import {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Country}  from 'country-state-city';
import Header from '../Header'
import './index.css'

const countriesList = Country.getAllCountries()
const interestsList = ["Adventure and Outdoors",
                       "Heritage and Culture",
                       "Nature and Landscapes",
                       "Wildlife and Safaries",
                       "Wine and Food","Beaches" ]
const travellersList = ["1 traveler","2 travelers","3 travelers","4 travelers","5 travelers","6 travelers","6+ travelers"]
const budgetList = ["$4000 to $5000","$5000 to $6000","$6000 to $7000","$7000 to $8000","$8000 to $10000","$10000+"]

class Home extends Component {
    state = {destinationList: [],
        countryInput:"",
        interestInput:"",
        budgetInput:"",
        travellersInput:""}
    
    onFormSubmit = event => {
        event.preventDefault()
        const {destinationList,countryInput,interestInput,budgetInput,travellersInput} = this.state
        const destinationObj = {
            id : uuidv4(),
            country: countryInput,
            interest: interestInput,
            budget: budgetInput,
            travelers: travellersInput
        }
        this.setState({
            destinationList: [...destinationList,destinationObj],
            countryInput:"",
            interestInput:"",
            budgetInput:"",
            travellersInput:""
        })
    }

    onSelectingPlace = event => {
        this.setState({countryInput: event.target.value})
    }

    onSelectingInterest = event => {
        this.setState({interestInput: event.target.value})
    }

    onSelectingTravelers = event => {
        this.setState({travellersInput: event.target.value})
    }

    onSelectingBudgetRange = event => {
        this.setState({budgetInput: event.target.value})
    }

    renderFormContainer = () => {
        console.log(this.state.destinationList)
        const {countryInput,interestInput,budgetInput,travellersInput} = this.state
        return(
            <form className='form-container' onSubmit={this.onFormSubmit}>
                <select className='select-container' required value={countryInput} onChange={this.onSelectingPlace}>
                    {countriesList.map(eachCountry => (
                        <>
                        <option key="0" value="" disabled hidden>Where do you want to go?</option>
                        <option key={eachCountry.name} value={eachCountry.name} >{eachCountry.name}</option>
                        </>
                    ))}
                </select>
                <select className='select-container' required value={interestInput} onChange={this.onSelectingInterest}>
                    {interestsList.map((eachInterest,index) => (
                        <>
                            <option key="sa" value="" disabled hidden>Your Interests?</option>
                            <option key={eachInterest} value={eachInterest} >{eachInterest}</option>
                        </>
                    ))}
                </select>
                <select className='select-container' required value={travellersInput} onChange={this.onSelectingTravelers}>
                    {travellersList.map((eachTraveler,index) => (
                        <>
                            <option key="sd" value="" disabled hidden>No. of Travelers</option>
                            <option key={eachTraveler} value={eachTraveler} >{eachTraveler}</option>
                        </>
                    ))}
                </select>
                <select className='select-container' required value={budgetInput} onChange={this.onSelectingBudgetRange}>
                    {budgetList.map((eachBudgetRange,index) => (
                        <>
                            <option key="sf" value="" disabled hidden>Budget Per Person</option>
                            <option key={eachBudgetRange} value={eachBudgetRange} >{eachBudgetRange}</option>
                        </>
                    ))}
                </select>
                <button className='trip-btn' type='submit'>Create My Trip Now</button>
            </form>
        )
    }
    
    render(){
        
        return (
            <div className='home-container'>
                <Header/>
                <div className='bg-img-container'>
                    <h1>We Care, So You Can Travel Carefree</h1>
                    <p>Let our experts plan your private, tailor-made and secure tour in 70+ 
                        inspiring destinations.
                    </p>
                    {this.renderFormContainer()}
                </div>
                <div className='bottom-content-container'>
                    <p>Experience a completely customized and flexible trip of a lifetime with experts you can trust. 
                        We are an award-winning team that offers round-the-clock local support during your trip and 
                        100% financial protection so you know you are in safe hands. That’s why over 40,000+ 
                        enchanted guests vouch for us – because with us, you can dream, book and travel carefree.
                    </p>
                </div>
            </div>
          )
    }
}

export default Home