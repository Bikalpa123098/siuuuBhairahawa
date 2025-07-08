import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import {Route,Routes} from 'react-router-dom'
import Toolbar from './Components/Navigation/Toolbar'

function App() {
  return (
    <div>
    <Toolbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
   </Routes>
    </div>
  )
}

export default App