import { useState } from "react"

const Display = (props) => {
  return (
    <div>
      {props.value}
    </div>
  )
}

//   const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

const Button = (props) => {
  console.log('props value is', props)
  const { handleClick, text } = props
  return(
    <button onClick={handleClick}>
    {text}
    </button>
  )
}


const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [value, setValue] = useState(10)
  // const [allClicks, setAll] = useState([])

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   setLeft(left + 1)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   setRight(right + 1)
  // }

  const setToValue = (newValue) => () => {
      console.log('value now', newValue)  // print the new value to console
      setValue(newValue)
  }
  

  // const handleClick = () =>
  // console.log('clicked the button')

  return (
    <div>
      {/* {left}
      <Button handleClick={handleLeftClick} text={"left"}/>
      <Button handleClick={handleRightClick} text={"right"}/>
      {right} */}
      {/* <History allClicks={allClicks} /> */}
      <Display value={value} />
      <Button handleClick={setToValue(1000)} text="thousand"/>
      <Button handleClick={setToValue(0)}  text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />
      {/* 返回的应该是一个函数的引用而不是函数调用 */}
    </div>
  )
}

export default App;
