import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6">
          <img src="/Images/Navitha-1.png" alt="profile_pic" className="about-img" />
        </div>
        <div className="col-md-6">
            <h1>About me</h1>

            <p>Hello! I'm Naralachetty Navitha, a Computer Science professional with a Master of Science degree from the University of Wisconsin-Milwaukee. I specialize in full-stack web development and machine learning, combining theoretical knowledge with practical expertise to build innovative software applications. As a dedicated problem-solver, I am passionate about utilizing my skills in algorithmic design to tackle complex challenges in web development and beyond. I am committed to applying my deep understanding of computer science principles to drive advancements in technology and deliver impactful results.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
