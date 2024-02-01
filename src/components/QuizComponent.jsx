import { Link } from 'react-router-dom'

import React from 'react'

function QuizComponent({currentQuestion,QuizData,next,previous,quit,checkAnswer}) {
  return (
    <div className='quizContainer'>
    <div className='quizBox'>
        <h1>Question</h1>
        <p>{currentQuestion + 1} of 15</p>
        <h3>{QuizData["question"]}</h3>

        <div className='options'>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionA"]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionB"]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionC"]}</div>
            <div onClick={(e) => {checkAnswer(e,QuizData["answer"])}} className="choices">{QuizData["optionD"]}</div>   
        </div>

        <div className='controls'>
            <div onClick={previous} className="controlButtons previous">previous</div>
            <div onClick={next} className="controlButtons next">next</div>

            {/* <Link to={'/result'}> */}
            <div onClick={quit} className="controlButtons quit">quit</div>
            {/* </Link> */}

             <Link to={'/result'}>
             <div className="controlButtons finish">Finish</div>
            </Link>
            
        </div>

    </div>
  </div>
  )
}

export default QuizComponent