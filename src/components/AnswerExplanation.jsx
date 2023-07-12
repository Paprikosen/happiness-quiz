export default function AnswerExplanation(props) {
        const { hasAnsweredCorrectly, nextQuestion, questionObject, questionNumber, endGame } = props

    return (
        <div className="explanationContainer">
            <h1>{hasAnsweredCorrectly ? "Das ist die richtige Antwort!" : "Das ist leider falsch"}</h1>
<p>{questionObject.explanation}</p>
            {questionNumber === 9 ? <button onClick={endGame}>Resultate</button> : <button onClick={nextQuestion}>Nächste Frage</button>}

        </div>
    )
}