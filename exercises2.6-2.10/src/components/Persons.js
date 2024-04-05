import React from "react"
import Person from "./Person"
import Personservice from "../services/Personservice"

const Persons =(props) => {
  // console.log(filteredPersons);
  
  const deletePerson = (id) => {
    Personservice.deleteperson(id).then(() => {
        // 删除成功后重新获取和设置数据
        Personservice.getAll().then(initpersons => {
          props.setPersons(initpersons);
          props.setFilteredPersons(initpersons);
        });
    });
}

  if (!props.filteredPersons) 
    return (
    <div>Loading...</div>
    )
    return (
      props.filteredPersons.map(person => <Person person={person} key={person.id} deletePerson={deletePerson}/>)
    )
}

export default Persons