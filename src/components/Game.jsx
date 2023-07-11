import Question from "./Question"
import React from "react"
import { questions } from "../questions"
import "./game.css"

export default function Game() {

    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = React.useState()

    console.log(hasAnsweredCorrectly)

    return (
        <div className="canvas" style={{backgroundColor: "#FFF9E4"}}>
            <div className="game">
                {hasAnsweredCorrectly ? <h1>This is correct!</h1> : <h1>This is false</h1>}
                <Question setHasAnsweredCorrectly={setHasAnsweredCorrectly} questionObject={questions[0]}/>
            </div>
        </div>
    )
}