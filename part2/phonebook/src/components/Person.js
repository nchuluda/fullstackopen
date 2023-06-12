const Person = ({ person, removePerson }) => {
    return (
        <div>
            <li>{person.name} {person.number} {} 
                <button onClick={() => removePerson(person)}>delete</button>
            </li>
        </div>
    )
}

export default Person