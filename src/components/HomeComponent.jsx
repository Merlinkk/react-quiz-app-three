
import { Link } from 'react-router-dom'
import React from 'react'

function HomeComponent({toggle}) {
  return (
    <>
    <div className='container'>
      <h1 className='quizHeading'>Quiz App</h1>
      
      <Link to="/quiz">
      <button className='playButton'>Play</button>
      </Link>
    
    </div>
    </>
  )
}

export default HomeComponent