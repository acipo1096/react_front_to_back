// In useState, the first parameter is the name of the used state
// The second parameter is the function that updates it

function FeedbackItem({ item }) {

    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
  )
}

export default FeedbackItem
