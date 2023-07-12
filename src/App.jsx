import "./App.css";
import React from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import EndScreen from "./components/EndScreen";

function App() {
  const [gameRunning, setGameRunning] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [points, setPoints] = React.useState(0)
  const [questionNumber, setQuestionNumber] = React.useState(0)

  function handleClick() {
    setGameRunning((prevState) => !prevState);
  }

  function newGame() {
    setGameRunning(false)
    setQuestionNumber(0)
    setPoints(0)
    setGameOver(false)
  }

  let screen = "";

  if (!gameRunning) {
    screen = <StartScreen onClick={handleClick} />;
  } else {
    if (!gameOver) {
      screen = <Game questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setGameOver={setGameOver} points={points} setPoints={setPoints}/>
    } else {
      screen = <EndScreen points={points} newGame={newGame}/>
    }
  }

  return (
    <>
      {/* Startbildschirm zuerst */}
      <div className="canvas">{screen}</div>
    </>
  );
}

export default App;

// Das Glücksquiz! Fragen und Antworten zum Thema Glück

// Schritt 1: Layout -> Check Figma
// Schritt 2: Erste Version ohne Funktionalität. App wird mit Hardcode gerendert
// Schritt 3: Quizbox als Component erstellen und rendern
// Schritt 4: Datenbank mit Fragen erstellen
// Schritt 5: Funktionalität -> Fragen lassen sich beantworten
// Schritt 6: Ergebnisse werden im localStorage gespeichert
// Schritt 7: Blackboard mit Ergebnissen und Kommentaren
