import Question from "./Question"
import React from "react"
import { questions } from "../questions"
import "./game.css"
import AnswerExplanation from "./AnswerExplanation"

export default function Game(props) {
    const { setGameOver } = props

    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = React.useState()
    const [hasAnswered, setHasAnswered] = React.useState(false)
    const [questionNumber, setQuestionNumber] = React.useState(0)
    const [points, setPoints] = React.useState(0)

    function nextQuestion() {
        setQuestionNumber( prevNumber => prevNumber + 1)
        setHasAnswered(false)
    }

    function endGame() {
        setGameOver(() => true)
    }
 

    return (
        <div className="canvas" style={{backgroundColor: "#FFF9E4"}}>
            {hasAnswered && <AnswerExplanation hasAnsweredCorrectly={hasAnsweredCorrectly} nextQuestion={nextQuestion} questionObject={questions[questionNumber]} questionNumber={questionNumber} endGame={endGame} /> }
            <div className="game">
                <div className="scoreContainer">
                    <p>Punkte: {points}</p>
                    <p>Frage {questionNumber+1}/10</p>
                </div>
                <Question setHasAnswered={setHasAnswered} setHasAnsweredCorrectly={setHasAnsweredCorrectly} questionObject={questions[questionNumber]} setPoints={setPoints}/>
            </div>
        </div>
    )
}