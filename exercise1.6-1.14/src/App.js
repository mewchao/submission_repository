import { useState } from 'react'

const Button = (props) => {
  const {handleClick,text} =props
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const mathrandom = () =>{
  // [0,1)
  const nums =  Math.floor(Math.random()*7)
  return nums
}



const Display  = (props) => {
  const {text} =props
  return (
    <div>
      <p>
        {text}
      </p>
    </div>
  )
}

const StatisticLine  = (props) => {
  const {text,value} =props
  return (
    <div>
      <p>
        {text+"  "}{value}
      </p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all===0)
  return (
      <div>
        <Display  text="statistics"/>
        <Display  text="No feedback given"/>
      </div>
  )
  return (
    <div>
    <Display  text="statistics"/>
    <StatisticLine  text="good" value={props.good} />
    <StatisticLine  text="netural" value={props.neutral}/>
    <StatisticLine  text="bad" value={props.bad}/>
    <StatisticLine  text="all" value={props.all}/>
    <StatisticLine  text="average" value={props.average}/>
    <StatisticLine  text="positive " value={props.positive}/>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  )
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const goodincrement = () => {
    setGood(good+1)
  }
  
  const neutralincrement = () => {
    setNeutral(neutral+1)
  }
  
  const badincrement = () => {
    setBad(bad+1)
  }

  const nextanecdote = () =>{
    const nums = mathrandom()
    console.log(nums)
    setSelected(nums)
  }

  const voteanecdote = () => {
    const updatedPoints = { ...points };
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  }

  let all = good + neutral + bad

  let average = (good - bad)/all

  let positive = (good)/all

  return (
    <div>
      <div>
        <StatisticLine  text="give feedback" />
        <Button handleClick={goodincrement} text="good"/>
        <Button handleClick={neutralincrement} text="neutral"/>
        <Button handleClick={badincrement} text="bad"/>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      </div>
      <div>
        {anecdotes[selected]}
        <div>has {points[selected]} votes</div>
        <Button handleClick={nextanecdote} text="next anecdote"/>
        <Button handleClick={voteanecdote} text="vote"/>
      </div>
    </div>
  )

}

export default App