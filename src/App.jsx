import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchStudent from './SearchStudent'
import Login from './Login'
import Login1 from './Login1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form  Handling</h1>
      <SearchStudent></SearchStudent>
      <Login></Login>
      <Login1></Login1>
    </>
  )
}

export default App
