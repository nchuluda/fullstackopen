const Header = ({ course }) => <h1>{course.name}</h1>

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ name, exercise }) => 
  <p>
    {name} {exercise}
  </p>

const Content = ({ parts }) => {
//console.log(parts)
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercise={part.exercises} key={part.id}/>
      ))}
    </div>
  )
}
  
const Course = ({ course }) => {
  //console.log(course)
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Testing a 4th part',
        exercises: 3,
        id: 4
      },
      {
        name: 'Testing a 5th part',
        exercises: 7,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App