// This is the main app component
// A fragment is just an empty angle bracket
import Header from "./components/Header"

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <h1>My App</h1>
            </div>
        </>

    )
}

export default App