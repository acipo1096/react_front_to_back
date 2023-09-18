// This is the main app component
// A fragment is just an empty angle bracket
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </>

    )
}

export default App