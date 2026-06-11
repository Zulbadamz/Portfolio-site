import './App.css';
import profilePic from './assets/profile.jpg';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <nav className="navbar">
        <h2 className="logo">Zuka Batdelger</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#problem-solving">Problem Solving</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I’m</p>
          <h1>Zuka Batdelger</h1>
          <p className="subtitle">
            I enjoy building clean and helpful applications that solve real problems.
            My portfolio highlights my learning journey, programming projects, and
            growth as an Application Development student.
          </p>
          <a href="#projects" className="primary-btn">View My Work</a>
        </div>

        <div className="hero-card">
          <div className="profile-placeholder">ZB</div>
          <p>Developer Portfolio</p>
        </div>
      </section>

      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>
          As a senior Application Development student at North Seattle College, 
          I am driven by a passion for crafting practical, user-friendly software 
          that empowers users and delivers real impact. I am actively seeking an 
          internship opportunity at a forward-thinking technology company where 
          I can apply my skills, contribute to meaningful projects, and continue 
          growing as a developer. A lifelong learner at heart, I am committed to 
          becoming the best version of myself every single day — obsessed with solving 
          complex problems and understanding not just the how, but more importantly, the why.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Software Developer – Zulip Open Source Project</h3>
            <h4>CodeDay</h4>
            <span className="date">Jun 2025 – Sep 2025</span>
          <p>
            Collaborated in a team-based software development environment to deliver project features on the Zulip open source platform.
          </p>
          </div>

          <div className="project-card">
            <h3>Developer – Production Team</h3>
            <h4>North Seattle College Tech Hub</h4>
            <span className="date">Apr 2026 – Jun 2026</span>
           <p>
            Contributing as a developer on the Production Team at NSC Tech Hub, an interdepartmental agency bridging Creative, Business, and Technical disciplines to scale student-led projects into professional institutional assets.
           </p>
          </div>

          <div className="project-card">
            <h3>Frontend Developer (Practicum) – Next Wave Dev</h3>
            <h4>Application Development BAS Practicum | North Seattle College</h4>
            <span className="date">Jan 2026 – Apr 2026</span>
            <p>
            Contributed to the Next Wave Dev static website project as part of the BAS practicum, focusing on frontend quality, UI improvements, and automated testing to ensure cross-device reliability.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="problem-solving" className="section">
        <h2>Problem Solving</h2>
        <div className="skills">
          <span>Database Design</span>
          <span>API Development</span>
          <span>Back-end Development</span>
          <span>Front-end Development</span>
          <span>Algorithms and Optimization</span>
          <span>Design Patterns and Architecture</span>
          <span>Communication and Growth Facilitator</span>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Let’s Connect</h2>
        <p>Email: <a href="mailto:zulbadamz@gmail.com">zulbadamz@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Zulbadamz" target="_blank">github.com/Zulbadamz</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zulbadam-batdelger-aa91851b7/" target="_blank">linkedIn/Zulbadamz</a></p>
      </section>
    </div>
     
  );
}
      
export default App;
