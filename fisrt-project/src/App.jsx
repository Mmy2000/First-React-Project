import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componet/Home/Home'
import Contact from './componet/Contact/Contact'
import Portfolio from './componet/Portfolio/Portfolio'
import About from './componet/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Portfolio/>
      <Contact/>
      <About/>
    </>
  )
}

export default App
