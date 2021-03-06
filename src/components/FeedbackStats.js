import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)
    // calculate ratings avg
    let avg = feedback.reduce((acc, cur) => {
        return (acc + cur.rating) 
    }, 0) / feedback.length
    console.log(avg)

    avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array
}

export default FeedbackStats