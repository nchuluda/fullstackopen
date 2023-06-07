const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  )
}

const Part = ({ name, exercise }) => 
  <p>
    {name} {exercise}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => (
        <Part name={name} exercise={exercises} key={id}/>
      ))}
    </div>
  )
}
  
const Course = ({ courses }) => {
  return (
    <div>
          <Header course={courses.name} />
          <Content parts={courses.parts} />
          <Total parts={courses.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course,i) => <Course key={i} courses={course}/>)}
    </div>
  )
}

export default App