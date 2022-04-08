import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../inceput/an/an'
import './inde.scss'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import About from '../Sidebar/About'

const RefreshPage = ()=>{
  window.location.reload();
}
const Fest = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['B', 'u', 'c', 'u', 'r', 'e', 's', 't', 'i']
  const jobArray = [
    'B',
    'r',
    'a',
    's',
    'o',
    'v',
  ]
  const jArray = ['T', 'i', 'm', 'i', 's', 'o', 'a', 'r', 'a']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <Router>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Cluj-</span>
            <span className={`${letterClass} _12`}>Napoca</span>
            <span className={`${letterClass} _14`}>
            <Link to="/cluj" onClick={<RefreshPage />} className="arrow right"></Link></span>
            <br />
            <span className={`${letterClass} _13`}>Sibiu</span>
            <span className={`${letterClass} _14`}>
            <Link to="/sb" onClick={<RefreshPage />} className="arrow right"></Link></span><br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <span className={`${letterClass} _14`}>
            <Link to="/buc" onClick={<RefreshPage />} className="arrow right"></Link></span><br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
            <span className={`${letterClass} _14`}>
            <Link to="/bv" onClick={<RefreshPage />} className="arrow right"></Link></span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jArray}
              idx={22}
            />
            <span className={`${letterClass} _14`}>
            <Link to="/tm" onClick={<RefreshPage />} className="arrow right"></Link></span>
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </Router>
  )
}

export default Fest