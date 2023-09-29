import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item #1 from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This is Feedback Item #2 from context',
            rating: 10
        },        
        {
            id: 3,
            text: 'This is Feedback Item #3 from context',
            rating: 10
        }

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback])
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, 
            ...updItem } : item))
        )
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback, // function that runs when clicked
        feedbackEdit, //actual piece of state that holds the bool
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;