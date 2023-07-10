import "../App.css";

export default function StartScreen() {
  return (
    <>
      <img src="../../public/happiness.png" alt="Ein Kleeblatt" width="200px" />
      <div className="welcomeContainer">
        <h1>Glücksquiz</h1>
        <button className="startButton">Starten</button>
      </div>
    </>
  );
}
