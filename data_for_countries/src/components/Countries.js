import React from "react"
import Country from "./Country"
import SpecifyCountry from "./SpecifyCountry"

const Countries =(props) => {
    // console.log("props.filteredcountries",props.filteredcountries);
  if (!props.filteredcountries) 
    return (
    <div>Loading...</div>
    )
  else if( props.filteredcountries.length>10)
    return (
      <div>Too many matches,specify any filter...</div>
    )
  else if( props.filteredcountries.length === 1)
    return (
      props.filteredcountries.map(country => <SpecifyCountry key={country.id} country={country}/>)
    )
    return (
      props.filteredcountries.map(country => <Country key={country.id} country={country}/>)
    )   
}

export default Countries