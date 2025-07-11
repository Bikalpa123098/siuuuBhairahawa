import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({img, title, description }) {
  const navigate = useNavigate();
  return (
    <span className='grid gap-6 shadow-md border bg-white border-gray-300'>
        <img className='h-60 w-full object-cover'src={img} alt={title} />
        <div className='p-4'>
        <h2 className='font-semibold capitalize text-xl'>{title}</h2>
        <div className='line-clamp-3'>{description}</div>
        <div onClick={()=>{
          navigate(`/card/${title}`)
        }} className='px-6 py-4 mt-4 bg-blue-400 rounded-2xl text-white  w-fit '>Read More</div>
        </div>
    </span>
  )
}

export default Card