import './App.css';
import profilePic from './assets/profile.jpg';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const [progressData, setProgressData] = useState(() => {
  const saved = localStorage.getItem('progressData');
  return saved ? JSON.parse(saved) : {};
});
const [modal, setModal] = useState(null);
const [modalProblems, setModalProblems] = useState('');
const [modalLeetcode, setModalLeetcode] = useState('');
const [modalPypup, setModalPypup] = useState('');

const getDaysInMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

const calculateStreak = (data) => {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    if (data[key]) streak++;
    else break;
  }
  return streak;
};

const openModal = (key) => {
  setModal(key);
  setModalLeetcode(progressData[key]?.leetcode || '');
  setModalPypup(progressData[key]?.pypup || '');
  setModalProblems(progressData[key]?.problems || '');
};

const saveProgress = () => {
  const updated = {
    ...progressData,
    [modal]: {
      leetcode: parseInt(modalLeetcode) || 0,
      pypup: parseInt(modalPypup) || 0,
      problems: (parseInt(modalLeetcode) || 0) + (parseInt(modalPypup) || 0)
    }
  };
  setProgressData(updated);
  localStorage.setItem('progressData', JSON.stringify(updated));
  setModal(null);
};

const deleteProgress = () => {
  const updated = { ...progressData };
  delete updated[modal];
  setProgressData(updated);
  localStorage.setItem('progressData', JSON.stringify(updated));
  setModal(null);
};

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(formRef.current);

    emailjs.send(
    'service_2muf3dc',
    'template_maq3vqd',
    {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    },
    '-Z1oMY-R-15URWpDR'
  ).then(() => {
    setStatus('sent');
    formRef.current.reset();
  }).catch((err) => {
    console.log('EmailJS error:', err);
    setStatus('error');
  });
};

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
          <a href="#progress">Progress</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I'm</p>
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

      <section id="progress" className="section">
  <h2>Daily Progress Tracker</h2>

  <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
    <a href="https://leetcode.com/problemset/" target="_blank" style={{
      padding: '12px 24px', borderRadius: '999px', textDecoration: 'none',
      fontWeight: 'bold', fontSize: '16px', background: '#ffa116', color: 'white'
    }}>
      🧩 LeetCode
    </a>
    <a href="https://pypup.com/paths" target="_blank" style={{
      padding: '12px 24px', borderRadius: '999px', textDecoration: 'none',
      fontWeight: 'bold', fontSize: '16px', background: '#3572A5', color: 'white'
    }}>
      🐍 PyPup
    </a>
  </div>

  <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
    <div style={{ background: '#fff3e0', borderRadius: '20px', padding: '20px 30px', textAlign: 'center', minWidth: '130px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffa116' }}>
        {Object.values(progressData).reduce((sum, d) => sum + (d.leetcode || 0), 0)}
      </div>
      <div style={{ fontSize: '14px', color: '#555' }}>🧩 LeetCode</div>
    </div>
    <div style={{ background: '#e3f2fd', borderRadius: '20px', padding: '20px 30px', textAlign: 'center', minWidth: '130px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#3572A5' }}>
        {Object.values(progressData).reduce((sum, d) => sum + (d.pypup || 0), 0)}
      </div>
      <div style={{ fontSize: '14px', color: '#555' }}>🐍 PyPup</div>
    </div>
    <div style={{ background: '#e1f5fe', borderRadius: '20px', padding: '20px 30px', textAlign: 'center', minWidth: '130px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0288d1' }}>
        {Object.values(progressData).reduce((sum, d) => sum + (d.problems || 0), 0)}
      </div>
      <div style={{ fontSize: '14px', color: '#555' }}>Total Problems</div>
    </div>
    <div style={{ background: '#e1f5fe', borderRadius: '20px', padding: '20px 30px', textAlign: 'center', minWidth: '130px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0288d1' }}>
        {Object.keys(progressData).length}
      </div>
      <div style={{ fontSize: '14px', color: '#555' }}>Days Coded</div>
    </div>
    <div style={{ background: '#e1f5fe', borderRadius: '20px', padding: '20px 30px', textAlign: 'center', minWidth: '130px' }}>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0288d1' }}>
        {calculateStreak(progressData)}
      </div>
      <div style={{ fontSize: '14px', color: '#555' }}>Current Streak 🔥</div>
    </div>
  </div>

  {/* Day headers */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '4px' }}>
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
      <div key={d} style={{ textAlign: 'center', fontWeight: 'bold', color: '#0288d1', fontSize: '14px' }}>{d}</div>
    ))}
  </div>

  {/* Calendar days */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
    {Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() }).map((_, i) => (
      <div key={`empty-${i}`} />
    ))}

    {getDaysInMonth().map((day) => {
      const key = day.toISOString().split('T')[0];
      const data = progressData[key];
      const isToday = key === new Date().toISOString().split('T')[0];
      return (
        <div
          key={key}
          onClick={(e) => { e.stopPropagation(); openModal(key); }}
          title={data ? `LeetCode: ${data.leetcode || 0} | PyPup: ${data.pypup || 0}` : 'Click to log'}
          style={{
            background: data ? '#0288d1' : '#f0f9ff',
            border: isToday ? '2.5px solid #ff6b35' : '1.5px solid #b3e5fc',
            borderRadius: '12px',
            padding: '10px 6px',
            textAlign: 'center',
            cursor: 'pointer',
            minHeight: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.1s',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: 'bold', color: data ? 'white' : '#1565c0' }}>
            {day.getDate()}
          </span>
          {data && data.leetcode > 0 && (
            <span style={{ fontSize: '10px', color: '#ffe0b2', marginTop: '2px' }}>
              🧩{data.leetcode}
            </span>
          )}
          {data && data.pypup > 0 && (
            <span style={{ fontSize: '10px', color: '#bbdefb', marginTop: '1px' }}>
              🐍{data.pypup}
            </span>
          )}
        </div>
      );
    })}
  </div>

  {modal && (
  <div style={{
    marginTop: '20px',
    background: 'white',
    borderRadius: '25px',
    padding: '35px',
    border: '2px solid #b3e5fc',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>
    <h3 style={{ margin: 0, color: '#1565c0' }}>Log for {modal}</h3>

    <label style={{ fontSize: '14px', color: '#555' }}>🧩 LeetCode problems</label>
    <input
      type="number"
      min="0"
      placeholder="LeetCode problems solved"
      value={modalLeetcode}
      onChange={(e) => setModalLeetcode(e.target.value)}
      style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #ffa116', fontSize: '16px', outline: 'none' }}
    />

    <label style={{ fontSize: '14px', color: '#555' }}>🐍 PyPup problems</label>
    <input
      type="number"
      min="0"
      placeholder="PyPup problems solved"
      value={modalPypup}
      onChange={(e) => setModalPypup(e.target.value)}
      style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #3572A5', fontSize: '16px', outline: 'none' }}
    />

    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={saveProgress} style={{
        background: '#0288d1', color: 'white', border: 'none',
        padding: '10px 22px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer'
      }}>Save</button>
      {progressData[modal] && (
        <button onClick={deleteProgress} style={{
          background: '#ef5350', color: 'white', border: 'none',
          padding: '10px 22px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer'
        }}>Delete</button>
      )}
      <button onClick={() => setModal(null)} style={{
        background: '#e0e0e0', color: '#333', border: 'none',
        padding: '10px 22px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer'
      }}>Cancel</button>
    </div>
  </div>
)}

</section>

      <section id="contact" className="section contact-section">
        <h2>Let's Connect</h2>
        <p>Email: <a href="mailto:zulbadamz@gmail.com">zulbadamz@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Zulbadamz" target="_blank">github.com/Zulbadamz</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zulbadam-batdelger-aa91851b7/" target="_blank">linkedIn/Zulbadamz</a></p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' 
            : status === 'sent' ? '✅ Sent!' 
            : status === 'error' ? '❌ Failed, try again' 
            : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;