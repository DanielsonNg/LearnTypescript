import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const onclick = (test: string) => {
    return 5
  }

  const [count, setCount] = useState(0)

  return (
    <>
      {/* Type */}
      {/* <Button
        setCount={setCount}
        onClick={onclick}
        style={{
          backgroundColor: 'red',
          color: 'blue',
          fontSize: 30,
          padding: '1rem 2rem',
          borderRadius: '8px',
          borderColor: 'transparent'
        }}><p>Click Me</p></Button> */}


      {/* Passing Component Attribute with ComponentProps */}
      {/* <Button type="submit" autoFocus={true} defaultValue="test" /> */}


      {/* Event Handling */}
      {/* <Button /> */}

      {/* Generic */}
      {/* <Button countValue={true} countHistory={[false, true, false]} /> */}

    </>
  )
}

export default App
