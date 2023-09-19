// In useState, the first parameter is the name of the used state
// The second parameter is the function that updates it
import Card from './shared/Card'


function FeedbackItem({ item }) {

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
  )
}

export default FeedbackItem
