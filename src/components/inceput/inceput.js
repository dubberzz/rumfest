import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './an/an'
import './index.scss'
import About from '../Sidebar/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const Inceput = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'R', 'u', 'm', 'F', 'e', 's', 't']
  const jobArray = [
    'A',
    'l',
    'e',
    'g',
    'e',
    ' ',
    'i',
    'n',
    'c',
    'e',
    'p',
    'u',
    't',
    'u',
    'l',
  ]
  const jArray = ['d', 'e', ' ', 'a', 'v', 'e', 'n', 't', 'u', 'r', 'a']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <Router>
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path='/' element={
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Bine,</span>
            <br />
            <span className={`${letterClass} _13`}>ai</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _13`}>venit</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _14`}>pe</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jArray}
              idx={22}
            />
          </h1>
          <h2>SINGURA APLICATIE DIN ROMANIA CARE POATE SA OFERE ASA CEVA</h2>
          <br />
          <span className={`${letterClass} _14`}>
          <p><i class="arrow down"></i></p>
          <p><i class="arrow down"></i></p></span>
        </div>
      </div> } />
      </Routes>
      <Loader type="pacman" /> 
    </Router>
  )
}

export default Inceput