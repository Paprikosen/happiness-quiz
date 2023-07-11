import Question from "./Question"
import React from "react"
import { questions } from "../questions"
import "./game.css"
import AnswerExplanation from "./AnswerExplanation"

export default function Game() {

    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = React.useState()
    const [hasAnswered, setHasAnswered] = React.useState(false)
    const [questionNumber, setQuestionNumber] = React.useState(0)

    function nextQuestion() {
        setQuestionNumber( prevNumber => prevNumber + 1)
        setHasAnswered(false)
    }
 
    console.log(hasAnsweredCorrectly)

    return (
        <div className="canvas" style={{backgroundColor: "#FFF9E4"}}>
            <div className="game">
                {hasAnswered && <AnswerExplanation hasAnsweredCorrectly={hasAnsweredCorrectly} nextQuestion={nextQuestion}  /> }
                <Question setHasAnswered={setHasAnswered} setHasAnsweredCorrectly={setHasAnsweredCorrectly} questionObject={questions[questionNumber]}/>
            </div>
        </div>
    )
}