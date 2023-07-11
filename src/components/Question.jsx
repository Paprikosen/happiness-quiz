import "./game.css"

export default function Question(props) {

    const { questionObject, setHasAnsweredCorrectly, setHasAnswered, hasAnswered } = props
    const { question } = questionObject

  function checkAnswer(correct) {
    correct ? setHasAnsweredCorrectly( () => true ) : setHasAnsweredCorrectly( () => false )
    setHasAnswered( () => true)
  }

  const question1 = questionObject.possibleAnswers[0]
  const question2 = questionObject.possibleAnswers[1]
  const question3 = questionObject.possibleAnswers[2]
  const question4 = questionObject.possibleAnswers[3]

  return (
    <>
      <h2>{question}</h2>
      <div className="questionContainer">
        <button disabled={hasAnswered} onClick={() => checkAnswer(question1.correct)} style={{ backgroundColor: "#f03986" }}>A) {question1.answer}</button>
        <button disabled={hasAnswered} onClick={() => checkAnswer(question2.correct)} style={{ backgroundColor: "#43dd65" }}>B) {question2.answer}</button>
        <button disabled={hasAnswered} onClick={() => checkAnswer(question3.correct)} style={{ backgroundColor: "#ffd600" }}>C) {question3.answer}</button>
        <button disabled={hasAnswered} onClick={() => checkAnswer(question4.correct)} style={{ backgroundColor: "#3c9bf2" }}>D) {question4.answer}</button>
      </div>
    </>
  );
}
