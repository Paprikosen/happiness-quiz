import "./App.css";
import React from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";

function App() {
  const [gameRunning, setGameRunning] = React.useState(true);

  function handleClick() {
    setGameRunning((prevState) => !prevState);
  }

  return (
    <>
      {/* Startbildschirm zuerst */}
      
        {!gameRunning ? <StartScreen onClick={handleClick} /> : <Game />}

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
