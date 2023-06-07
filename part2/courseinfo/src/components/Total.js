const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <b>total of {sum} exercises</b>
      </div>
    )
  }

export default Total