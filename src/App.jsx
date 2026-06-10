import './App.css';
import profilePic from './assets/profile.jpg';

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <h2 className="logo">Zuka Batdelger</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I’m</p>
          <h1>Zuka Batdelger</h1>
          <p className="subtitle">
            Application Development student creating practical, user-friendly software projects.
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
          I enjoy building clean and helpful applications that solve real problems.
          My portfolio highlights my learning journey, programming projects, and
          growth as an Application Development student.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Zulip Open Source Contributions</h3>
            <p>Contributed to the Zulip open-source project by implementing UI
               improvements, fixing bugs, reviewing pull requests, and collaborating
               with developers through GitHub workflows.</p>
          </div>

          <div className="project-card">
            <h3>Frontend Developer Practicum</h3>
            <p>Improved frontend quality and automated testing for a production website.</p>
          </div>

          <div className="project-card">
            <h3>Developer – Production Team</h3>
            <p>Worked on student-led software projects in a cross-functional Agile environment.</p>
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

      <section id="contact" className="section contact-section">
        <h2>Let’s Connect</h2>
        <p>Email: <a href="mailto:zulbadamz@gmail.com">zulbadamz@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Zulbadamz" target="_blank">github.com/Zulbadamz</a></p>
      </section>
    </div>
  );
}

export default App;
