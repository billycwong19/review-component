import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import AboutIconLink from '../components/AboutIconLink'
import { FeedbackProdvider } from '../context/FeedbackContext'



const Home = () => {

  return (
    <FeedbackProdvider>
        <div className='container'>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <AboutIconLink />
        </div>
    </FeedbackProdvider>
  )
}

export default Home