import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%] h-20 bg-[#673C4F] text-gray-300 font-mono font-semibold text-3xl flex justify-between items-center py-6 px-40 border-0 rounded-4xl'>
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Services">Services</a>
        <a href="Contact">Contact</a>
    </div>
  )
}

export default Navbar