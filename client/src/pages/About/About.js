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
            <p>Hi, I'm Naralachetty Navitha! 🎓 Master of Science in Computer Science | University of Wisconsin Milwaukee 📚 A computer science enthusiast with a rich blend of academic knowledge and practical experience, especially in web development, machine learning, and virtual reality game development. Adept in implementing effective solutions through algorithmic design and robust coding practices.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
