import React from 'react'
import Banner from '../Components/UI/Banner'

function About() {
  return (
    <div>
      <h2 className='text-4xl font-extrabold text-red-950'>Hello it is about me</h2>
      <Banner title="About" age="10" subtitle="Subtitle of about " description="It is description of about"/>
    </div>
  )
}

export default About