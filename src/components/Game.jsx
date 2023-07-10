import "./game.css"

export default function Game() {
    return (
        <div className="canvas game">
            <h2>Who was the 4th president of the USA?</h2>

            <div className="questionContainer">
                <button>A) James Madison</button>
                <button style={{backgroundColor: "#43dd65"}}>B) James Madison</button>
                <button style={{backgroundColor: "#ffd600"}}>C) James Madison</button>
                <button style={{backgroundColor: "#3c9bf2"}}>D) James Madison</button>
            </div>
        </div>
    )
}