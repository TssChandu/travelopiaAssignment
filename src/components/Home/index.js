import {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import TouristContext from '../../TouristContext/travelerContext'
import { GrFormClose } from "react-icons/gr";
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
const date = new Date()
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
if (parseInt(month) < 10){
    month = '0' + month
}
if (parseInt(day) < 10){
    day = '0' + day
}
const dateFormat = `${year}-${month}-${day}`

class Home extends Component {
    state = {destinationList: [],touristList:[],
        countryInput:"",
        interestInput:"",
        budgetInput:"",
        travellersInput:"",
        nameInput:"",
        emailInput:"",
        phNumInput:"",
        daysInput:"",
        fromDateInput:"",
        activeId:""}

    onChangename = event => {
        this.setState({nameInput:event.target.value})
    }

    onChangeEmail = event => {
        this.setState({emailInput:event.target.value})
    }

    onChangePhNo = event => {
        this.setState({phNumInput:event.target.value})
    }

    onChangeDays = event => {
        this.setState({daysInput:event.target.value})
    }

    onChangeDate = event => {
        this.setState({fromDateInput:event.target.value})
    }
    
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
            travellersInput:"",
            activeId: destinationObj.id,
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

    renderFormContainer = () => (
        <TouristContext.Consumer>
            {value => {
                    const {countryInput,interestInput,budgetInput,travellersInput,nameInput,
                    emailInput,
                    phNumInput,
                    daysInput,
                    fromDateInput} = this.state
                    const {setList} = value
    
                    this.popupSubmit = event => {
                        event.preventDefault()
                        const {activeId,destinationList,nameInput,emailInput,phNumInput,daysInput,fromDateInput} = this.state
                        const activeObj = destinationList.find(obj => obj.id === activeId)
                        if (nameInput !== "" && emailInput !== "" && phNumInput !== ""){
                            const updatedObj = {...activeObj,nameInput,emailInput,phNumInput,daysInput,fromDateInput}
                            setList([updatedObj])
                            this.setState({
                                touristList : [updatedObj],
                                nameInput:"",
                                emailInput:"",
                                phNumInput:"",
                                daysInput:"",
                                fromDateInput:"",
                                activeId:""
                            })
                        }
                
                    }

                    return(
                        <form className='form-container' onSubmit={this.onFormSubmit}>
                            <select className='select-container' value={countryInput} onChange={this.onSelectingPlace}>
                                {countriesList.map(eachCountry => (
                                    <>
                                    <option key="0" value="" disabled hidden>Where do you want to go?</option>
                                    <option key={eachCountry.name} value={eachCountry.name} >{eachCountry.name}</option>
                                    </>
                                ))}
                            </select>
                            <select className='select-container' value={interestInput} onChange={this.onSelectingInterest}>
                                {interestsList.map((eachInterest,index) => (
                                    <>
                                        <option key="sa" value="" disabled hidden>Your Interests?</option>
                                        <option key={index} value={eachInterest} >{eachInterest}</option>
                                    </>
                                ))}
                            </select>
                            <select className='select-container' value={travellersInput} onChange={this.onSelectingTravelers}>
                                {travellersList.map((eachTraveler,index) => (
                                    <>
                                        <option key="sd" value="" disabled hidden>No. of Travelers</option>
                                        <option key={index} value={eachTraveler} >{eachTraveler}</option>
                                    </>
                                ))}
                            </select>
                            <select className='select-container' value={budgetInput} onChange={this.onSelectingBudgetRange}>
                                {budgetList.map((eachBudgetRange,index) => (
                                    <>
                                        <option key="sf" value="" disabled hidden>Budget Per Person</option>
                                        <option key={index} value={eachBudgetRange} >{eachBudgetRange}</option>
                                    </>
                                ))}
                            </select>
                            
                            <Popup
                                    modal
                                    trigger={
                                    <button className='trip-btn' type='submit'>Create My Trip Now</button>
                                    } 
                                    position='top center' 
                                    contentStyle={{ width: '30vw',borderRadius: '10px',backgroundColor:"#e7dfdf" }}
                                >
                                {close => (
                                    <div className='popup-container'>
                                    <button
                                    type="button"
                                    className="trigger-button"
                                    onClick={() => close()}
                                    >
                                    <GrFormClose size={30}/>
                                    </button>
                                    <h1>Almost There!</h1>
                                    <p>We need a bit more info to create your itinerary:</p>
                                    <form className='popup-form-container' onSubmit={this.popupSubmit}>
                                        <input className='input' name="nameInput" value={nameInput} onChange={this.onChangename} type='text' placeholder='Enter Name *' required/>
                                        <input className='input' name="emailInput" value={emailInput} onChange={this.onChangeEmail} type="email" placeholder='Enter Email *' required/>
                                        <input className='input' name="phNumInput" value={phNumInput} onChange={this.onChangePhNo} type='tel' placeholder='Phone Number*' required/>
                                        <div className='duration-date-container'>
                                            <input className="days-input" name="daysInput" value={daysInput} onChange={this.onChangeDays} type='number' placeholder='Trip Duration (days)'/>
                                            <input className="date-input" name="fromDateInput" value={fromDateInput} onChange={this.onChangeDate} type="date" id="datemin" min={dateFormat} /> 
                                        </div>
                                        <button className='submit-btn' type='submit' >Submit</button>
                                        <p>Required*</p>
                                    </form>
                                    </div>
                                )}
                            </Popup>
                        </form>
                    )
            }}
        </TouristContext.Consumer>
    )
    
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