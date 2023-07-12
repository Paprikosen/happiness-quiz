export default function EndScreen(props) {
    const { points, newGame } = props
    return (
        <>
        <h1>Sehr gut gemacht! Du hast {points} { points === 1 ? "Punkt" : "Punkte"} erhalten!</h1>
        <button onClick={newGame}>Neues Spiel</button>
        </>
    )
}