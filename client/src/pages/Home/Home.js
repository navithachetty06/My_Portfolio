import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Docs/Navitha_Resume.pdf'

const Home = () => {
  return (
    <>
    <div className="container-fluid home-container">
     <div className="container home-content">
    <h2>Hi👋 I'm a</h2>
    <h1>
      <Typewriter
          options={{
           strings: ['Full Stack Developer!', 'Web Developer!'],
            autoStart: true,
              loop: true,
            }}
       />
    </h1>
    <div className='home-buttons'>
      <a className='btn btn-cv' href={Resume} download = "Navitha.pdf" >
        My Resume
      </a>
            </div>
    </div>
    </div>
    </>
  )
}

export default Home