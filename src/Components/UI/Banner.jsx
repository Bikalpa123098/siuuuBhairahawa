import React from 'react'
// import { useLocation } from 'react-router-dom'
// const location = useLocation();
console.log(location)
function Banner({ title, age, subtitle, description }) {
  return (
    <>
    {location.pathname }
    {title}{age} {subtitle} {description}
    </>
  )
}

export default Banner