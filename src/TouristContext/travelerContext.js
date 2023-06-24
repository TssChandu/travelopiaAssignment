import React from 'react'

const TouristContext = React.createContext({
    travelerList:[],
    setList: () => {},
})

export default  TouristContext