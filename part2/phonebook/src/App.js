import { useState, useEffect } from 'react'
import axios from 'axios'
import Error from './components/Error'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
  const [error, setError] = useState(null)
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
      phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.toLowerCase()
    }
    
    if (persons.some(p => p.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old phone number with a new one?`)) {
        phonebookService
          .update(personObject.id, personObject)
          .then(returnedPerson => {
            setPersons(
              persons.map((p) => (p.id !== personObject.id ? p : returnedPerson))
            )
            setNewName('')
            setNewNumber('')
          })
          .then(notification => {
            setNotification(`'${newName}' was updated`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          })
          .catch(error => {
            setError(`'${newName}' was not updated`)
            setTimeout(() => {
              setError(null)
            }, 3000)
          })
      }
    } else {
        phonebookService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
        })
          .then(notification => {
            setNotification(`'${newName}' added`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
        })
        .catch(error => {
          console.log(error)
          setError(`'${newName}' was not added`)
          setTimeout(() => {
            setError(null)
          }, 3000)
        })
    }
  }

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      phonebookService
        .remove(person.id)
        .then(setPersons(persons.filter((p) => p.id !== person.id)))
        .then(notification => {
          setNotification(`'${person.name}' deleted`)
          setTimeout(() => {
            setNotification(null)
          }, 3000)
        })
        .catch(error => {
          setError(`'${person.name}' was not deleted`)
          setTimeout(() => {
            setError(null)
          }, 3000)
        })
    } 
  }

  const personsToShow = (filter.length > 0)
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Error message={error} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
          addPerson={addPerson}
          newName={newName}
          newNumber={newNumber}
          handlePersonChange={handlePersonChange}
          handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App