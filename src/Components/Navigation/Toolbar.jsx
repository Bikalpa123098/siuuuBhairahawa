import React from 'react'
import { Link } from 'react-router-dom'
function Toolbar() {
  return (
    <div className='w-[100%] h-20 bg-[#673C4F] text-gray-300 font-mono font-semibold text-3xl flex justify-between items-center py-6 px-40 border-0 rounded-4xl'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      
    </div>
  )
}

export default Toolbar