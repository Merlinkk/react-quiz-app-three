import { Link } from 'react-router-dom'

import React from 'react'

function ResultComponent({Result,Attempted,QuizReset,PlayAgain}) {
  return (
    <div className='resultContainer'>
        <h1 className='headingResult'>Result</h1>
        <div className='quizBox result'>
            <h2>You need more practice!</h2>
            <h1 className='scoreLine'>Your Score is {(Result/15*100).toFixed(0)}%</h1>

            <div className='quizStats'>
                <div className='statElement'>
                    <span>Total number of questions</span>
                    <span>15</span>
                </div>
                <div className='statElement'>
                    <span>Number of attempted questions</span>
                    <span>{Attempted}</span>
                </div>
                <div className='statElement'>
                    <span>Number of correct answers</span>
                    <span>{Result}</span> 
                </div>
                <div className='statElement'>
                    <span>Number of wrong answers</span>
                    <span>{15 - Result}</span>
                </div>
            </div>
        </div>

        <div className='controls resultControls'>
            <Link to={'/quiz'}>
            <div onClick={PlayAgain} className="controlButtons playAgain">Play Again</div>
            </Link>
            <Link to={'/'}>
            <div onClick={QuizReset} className="controlButtons home">Back to Home</div>
            </Link>
        </div>

    </div>
  )
}

export default ResultComponent
