import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(15)


  const addValue = () => {
    setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur counter</h1>
      <h2>Counter value: { counter }</h2>

      <button
        onClick={addValue}
      >Add value { counter }</button>
      <br />
      <button
        onClick={removeValue}
      >Subtract value {counter}</button>
      <p>{ counter }</p>
    </>
  )
}

export default App
