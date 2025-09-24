import './App.css'
import Header from './components/Header'
import main from './components/main'
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
