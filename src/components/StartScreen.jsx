import "../App.css";

export default function StartScreen(props) {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props
  return (
    <>
      <img src="../../public/happiness.png" alt="Ein Kleeblatt" width="200px" />
      <div className="welcomeContainer">
        <h1>Glücksquiz</h1>
        <button onClick={onClick} className="startButton">Starten</button>
      </div>
    </>
  );
}
