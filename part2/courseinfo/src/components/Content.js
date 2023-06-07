import Part from './Part'

const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(({ name, exercises, id }) => (
          <Part name={name} exercise={exercises} key={id}/>
        ))}
      </div>
    )
  }

  export default Content