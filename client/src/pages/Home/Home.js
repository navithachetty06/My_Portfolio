import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
    <div className="container-fluid home-container">
     <div className="container home-content">
    <h1>Hi I'm a</h1>
    <h2>
      <Typewriter
          options={{
           strings: ['Full Stack Developer!', 'Web Developer!','Data Engineer!'],
            autoStart: true,
              loop: true,
            }}
       />
    </h2>
    <div className='home-buttons'>
      <button className='btn btn-cv'> Download Resume</button>
            </div>
    </div>
    </div>
    </>
  )
}

export default Home
