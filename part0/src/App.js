// 定义了一个名为App的React组件
// 作为一个参数，该参数接收一个对象，该对象有对应于组件用户定义的所有 "props "的字段。
const Hello = (props) => {
  return (
    <div>
      <p>
       Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  )
}

export default App