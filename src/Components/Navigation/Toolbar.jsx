import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Home from '../../Pages/Home'
function Toolbar() {
  const location = useLocation();
  const navItems=[
  {title:'Home', path:'/'},
  {title:'About', path:'/about'},
  {title:'Contact', path:'##'},
  {title:'Blog', path:'##'},
  {title:'Event', path:'##'}]
  return (
    <div className='w-[100%] h-20 bg-amber-600 text-gray-300  fixed top-0 z-50 font-mono font-semibold text-3xl flex justify-between gap-40 items-center py-6 px-40 border-0 '>
      <h2 className='text-4xl text-white font-bold'>Tranning</h2>
      <div className='flex gap-20'>
       {navItems.map((item, index) => {
        return(
          <div>
        <Link key={index} to={item.path} className={`capitalize ${location.pathname==item.path?"text-red-600":"text-white"}`}>{item.title}</Link>
           <div className={`h-1 bg-white ${location.pathname==item.path?"w-full":"w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>  
          </div>
         )
      
       })}
        
      </div>
    </div>
  )
}

export default Toolbar