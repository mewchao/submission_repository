import { useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Personservice from './services/Personservice'

const App = () => {

  const hook = () => {
    Personservice.getAll().then(initpersons => 
      {
        // console.log("1");
        setPersons(initpersons);
        setFilteredPersons(initpersons)
      }) 
  }
  useEffect(hook, [])

  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([]);
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
        id: String(newId)
      }
      Personservice.create(newPerson).then(returnperson => setPersons(returnperson))
    }
    setNewName('')
    setnewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
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
      <Persons filteredPersons={filteredPersons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} />
    </div>
  )
}

export default App