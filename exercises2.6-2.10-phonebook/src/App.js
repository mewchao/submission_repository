import { useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Personservice from './services/Personservice'
import Notification from './components/Notification'

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
  const [errorMessage, setErrorMessage] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()
    const isNameExists = persons.some(person => person.name === newName);

    if(isNameExists) {
      if (window.confirm(`Do you really want to replace the ${newName} 's  phonenumber ?`)){
          const person = persons.find(p => p.name === newName)
          const changedPerson = { ...person, number : newNumber }
          // 注意这是异步操作    更新成功后重新获取和设置数据
          Personservice.update(person.id, changedPerson).then(
            () =>
            Personservice.getAll().then(initpersons => {
              setPersons(initpersons);
              setFilteredPersons(initpersons);
              setErrorMessage(`changed ${newName} 's phonenumber to ${newNumber}`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 3000)
            }) 
          )
      }
      else{
        alert(`${newName} is already added to phonebook`);
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      Personservice.create(newPerson).then(returnperson => {setPersons(returnperson);
        setErrorMessage(`Added ${newName}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
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
      <Notification message={errorMessage}/>
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