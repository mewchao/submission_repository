import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
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