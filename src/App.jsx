import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main />
     
    </>
  )
}

export default App
