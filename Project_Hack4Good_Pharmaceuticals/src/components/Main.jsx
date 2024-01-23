import Card from "./Card"
import "./styles/Main.css"

function Main(){
    return (
        <main>
            <div className="cards">
                <h1 className="cards-title"></h1>
                <div className="cards-grid">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </main>
    )
}

export default Main