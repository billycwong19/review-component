import { Link } from 'react-router-dom'

import Card from "../components/shared/Card"

const About = () => {
  return (
    <Card className='about'>
        <h1>About</h1>
        <p>A review app created with React</p>
        <p>Version: 1.0.0 </p>
        <Link to="/">Back Home</Link>
    </Card>
  )
}

export default About