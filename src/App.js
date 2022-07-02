import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/Header"
import About from './pages/About'
import Home from './pages/Home'

const App = () => { 
  return (
      <>
        <Header />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='about' element={<About />} />
              </Routes>
            </Router>
      </>

  )
}

export default App