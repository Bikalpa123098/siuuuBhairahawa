import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import {Route,Routes} from 'react-router-dom'
import Toolbar from './Components/Navigation/Toolbar'
import PageNotFound from './Pages/PageNotFound'
import CardDetails from './Pages/CardDetails'

function App() {
  return (
    <div className=''>
    <Toolbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/card/:id" element={<CardDetails />} />
    <Route path="*" element={<PageNotFound />} />
   </Routes>
    </div>
  )
}

export default App