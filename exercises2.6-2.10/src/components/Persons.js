import React from "react"
import Person from "./Person"

const Persons =(props) => {
  // console.log(filteredPersons);
  if (!props.filteredPersons) 
    return (
    <div>Loading...</div>
    )
    return (
      props.filteredPersons.map(person => <Person person={person} key={person.id}/>)
    )
}

export default Persons