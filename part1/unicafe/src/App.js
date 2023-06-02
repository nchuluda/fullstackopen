import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Header = ({text}) => (<h1>{text}</h1>)

const StatisticLine = (props) => <div>{props.text} {props.value}</div>

const Statistics = (props) => {
  if (props.totalResponses === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return ( 
    <div>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral}/>
    <StatisticLine text="bad" value={props.bad}/>
    <StatisticLine text="all" value={props.totalResponses} />
    <StatisticLine text="average" value={props.averageResponses} />
    <StatisticLine text="percent" value={props.percentPositive} />
    </div>
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
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  totalResponses={totalResponses} 
                  averageResponses={averageResponses}
                  percentPositive={percentPositive} />

    </div>
  )
}

export default App