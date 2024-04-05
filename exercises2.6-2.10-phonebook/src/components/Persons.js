import React from "react"
import Person from "./Person"
import Personservice from "../services/Personservice"

const Persons =(props) => {

  
  const deletePerson = (id) => {
    if (window.confirm(`Do you really want to delete ${id}?`)) {
      Personservice.deleteperson(id).then(() => {
        // 删除成功后重新获取和设置数据
        Personservice.getAll().then(initpersons => {
          props.setPersons(initpersons);
          props.setFilteredPersons(initpersons);
        });
    });
    }else {
        
    }
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