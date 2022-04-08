import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../inceput/an/an'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['B', 'a', 'l', 't', 'a', 'r', 'i', 'u', ' ', 'G', 'e', 'o', 'r', 'g', 'e']
  const jobArray = [
    '1',
    '6',
    ' ',
    'a',
    'n',
    'i',
  ]
  const jArray = ['B', 'a', 'c', 'a', 'u']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Cine</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _14`}>sunt</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _14`}>eu?</span>
            <br />
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
          <h2>JAVA SCRIPT | REACT</h2>
          <br />
          <span className={`${letterClass} _14`}>
          <p><i class="arrow down"></i></p>
          <p><i class="arrow down"></i></p></span>
        </div>
      </div>
      <Loader type="pacman" />
      </>
    )
  }

export default About;