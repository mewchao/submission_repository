import { useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {

  const hook = () => {
    console.log('effect')
    const eventHandler = (response) => {
      console.log('promise fulfilled')
      setPersons(response.data)
    }
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }

  useEffect(hook, [])

  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([...persons]); // 初始化为所有persons
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const isNameExists = persons.some(person => person.name === newName);
    if(isNameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newId = persons.length + 1;
      const newPerson = {
        name: newName,
        number: newNumber,
        id: newId
      }
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setnewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilteredPersons={setFilteredPersons}  persons={persons}/>
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        addPerson={addPerson} 
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App