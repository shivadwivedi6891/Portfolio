import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
