import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'
import  Questions  from './../resources/quizQuestion.json'
import { Routes, Route} from 'react-router-dom'

function App() {

  const [home, setHome] = useState(true)
  const [quiz, setQuiz] = useState(false)
  const [result, setResult] = useState(false)
  const [quit, setQuit] = useState(false)

  const [score, setScore] = useState(0)
  const [currentQuestion , setIndex] = useState(0)
  const [attempted, setAttempt] = useState(0)
  const navigate = useNavigate()

  function toggleStartQuiz(){
    setHome(false)
    setQuiz(true)
  }

  function toggleNextQuestion(){
    if(!quit){
      if(currentQuestion < Questions.length -1){
        setIndex(currentQuestion + 1)
        }
        console.log(score,currentQuestion,attempted)
        resultPopUp()  
    }
    }

    function togglePreviousQuestion(){
    if(!quit){
      if(currentQuestion === 0) return
    else if(currentQuestion >0 ){
      setIndex(currentQuestion - 1)
    }
  }
  }

  function toggleQuit(){
    setHome(false)
    setQuiz(false)
    setResult(true)
    setQuit(true)
    alert("You have quit the quiz")
  }

  function quizReset(){
    setQuit(false)
    setScore(0)
    setAttempt(0)
    setIndex(0)
  }

  function playAgain(){
    quizReset()
  }

  function checkAnswer(e,ans){
    if(!quit){
      e.target.innerText == ans ? setScore(score+1) : null
      toggleNextQuestion()
      resultPopUp()
      setAttempt(attempted+1)
    }
  }

  function resultPopUp(){
    if(currentQuestion == Questions.length -1 ){
      setHome(false)
      setQuiz(false)
      setResult(true)
      navigate('/result')
    }
  }

  return (
<>
      
      <Routes>

        <Route path="/" element={<HomeComponent toggle={toggleStartQuiz} />} />
        
        <Route path="/quiz" element={<QuizComponent 
        currentQuestion = {currentQuestion}
        QuizData = {Questions[`${currentQuestion}`]} 
        next = {toggleNextQuestion}
        previous = {togglePreviousQuestion}
        quit = {toggleQuit}
        checkAnswer = {checkAnswer}
        />} /> 
      
        <Route path="/result" element={<ResultComponent
        Result = {score}
        Attempted = {attempted}
        QuizReset={quizReset}
        PlayAgain={playAgain}
        />} />

      </Routes>



</>
  )
}

export default App