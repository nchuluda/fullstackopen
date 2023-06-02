import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = ({counter, category}) => <div>{category} {counter}</div>

const Header = ({text}) => (<h1>{text}</h1>)

const Statistics = (props) => {
  if (props.totalResponses === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <>
    <div>{props.all} {props.totalResponses}</div>
    <div>{props.average} {props.resultAverage}</div>
    <div>{props.positive} {props.resultPositive}</div>
    </>
  )
}

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
      <Header text="give feedback"/>
      <Button handleClick={increaseGoodByOne} text="good" />
      <Button handleClick={increaseNeutralByOne} text="neutral" />
      <Button handleClick={increaseBadByOne} text="bad" />
      <Header text="statistics" />
      <Display category="good" counter={good} />
      <Display category="neutral" counter={neutral} />
      <Display category="bad" counter={bad} />
      <Statistics all="all"
                  totalResponses={totalResponses} 
                  average="average"
                  resultAverage={averageResponses}
                  positive="positive"
                  resultPositive={percentPositive} />

    </div>
  )
}

export default App