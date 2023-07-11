export default function AnswerExplanation(props) {
        const { hasAnsweredCorrectly, nextQuestion } = props
    return (
        <div className="explanationContainer">
            <h1>{hasAnsweredCorrectly ? "Das ist die richtige Antwort!" : "Das ist leider falsch"}</h1>
            <button onClick={nextQuestion}>Nächste Frage</button>

        </div>
    )
}