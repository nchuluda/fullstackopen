import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = ({counter, category}) => <div>{category} {counter}</div>

const Header = ({}) => (<h1>give feedback</h1>)

const Statistics = () => (<h1>statistics</h1>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // functions to alter state
  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral +1)
  const increaseBadByOne = () => setBad(bad + 1)

  // calculate statistics
  const totalResponses = good + neutral + bad
  const averageResponses = ((good*1)+(bad*-1))/totalResponses
  const percentPositive = (good/totalResponses)*100 + " %"


  return (
    <div>
      <Header />
      <Button handleClick={increaseGoodByOne} text="good" />
      <Button handleClick={increaseNeutralByOne} text="neutral" />
      <Button handleClick={increaseBadByOne} text="bad" />
      <Statistics />
      <Display category="good" counter={good} />
      <Display category="neutral" counter={neutral} />
      <Display category="bad" counter={bad} />
      <Display category="all" counter={totalResponses} />
      <Display category="average" counter={averageResponses} />
      <Display category="positive" counter={percentPositive} />
    </div>
  )
}

export default App