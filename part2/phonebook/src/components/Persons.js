import Person from './Person'

const Persons = ({ personsToShow, removePerson }) => {
    return (
      <ul>
        {personsToShow.map(person => 
          <Person key={person.name} person={person} removePerson={removePerson} />
        )}
      </ul>
    )
  }

export default Persons