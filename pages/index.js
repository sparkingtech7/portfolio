import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function ProPortfolioExpanded() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Portfolio | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* BACKGROUND GLOW ORBS */}
      <div className="glow-orb purple" />
      <div className="glow-orb blue" />

      <main className={`content ${mounted ? 'visible' : ''}`}>
        
        {/* NAV */}
        <nav className="nav">
          <span className="logo">DEV.PORTFOLIO</span>
          <div className="nav-links">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>
            <a href="mailto:email@example.com" className="contact-link">Contact</a>
          </div>
        </nav>

        {/* HERO SECTION WITH IMAGE */}
        <section className="hero-split">
          <div className="hero-text">
            <h1>
              Crafting digital <br />
              <span className="gradient-text">experiences.</span>
            </h1>
            <p className="subtitle">
              I'm a Full Stack Developer with 2 years of experience building accessible, high-performance web applications using the **React** and **Node.js** ecosystem.
            </p>
            <div className="hero-btns">
               <a href="#projects" className="btn primary">View My Work</a>
               <a href="#" className="btn secondary">Download CV</a>
            </div>
          </div>
          {/* PROFILE IMAGE - Replace URL with client's photo later */}
          <div className="profile-img-container glass">
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Profile" 
              className="profile-img"
            />
          </div>
        </section>

        {/* BENTO GRID LAYOUT */}
        <div className="grid" id="projects">
          
          {/* CARD: THE STACK */}
          <div className="card glass">
            <h3>My Toolbox</h3>
            <p>The technologies I use to bring ideas to life.</p>
            <div className="tags">
              {['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'AWS', 'Figma'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

           {/* CARD: ABOUT */}
          <div className="card glass large">
            <h3>More Than Just Code</h3>
            <p>
              While I specialize in full-stack development, I have a keen eye for **UI/UX design** and system architecture. 
              Over the last 2 years, I've moved from building simple websites to architecting complex SaaS platforms that handle thousands of users.
              My goal is always to build scalable solutions that are intuitive for the end-user.
            </p>
          </div>

          {/* PROJECT 1 - WITH IMAGE */}
          <div className="card large glass project-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Dashboard Project"
              className="project-thumb"
            />
            <div className="project-content">
              <div className="project-header">
                <h3>Inventory SaaS Dashboard</h3>
                <span className="arrow">↗</span>
              </div>
              <p>A real-time inventory management system for small businesses. Features include stock tracking, automated alerts, and data visualization charts.</p>
              <div className="tags">
                <span className="tag highlight">Next.js App Router</span>
                <span className="tag">Supabase Auth</span>
                <span className="tag">Recharts</span>
              </div>
            </div>
          </div>

          {/* PROJECT 2 - WITH IMAGE */}
          <div className="card glass project-card">
             <img 
              src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Crypto Project"
              className="project-thumb"
            />
            <div className="project-content">
              <h3>High-Frequency Crypto API</h3>
              <p>Robust Node.js backend tracking live crypto prices with low latency across multiple exchanges.</p>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Redis Caching</span>
              </div>
             </div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="card glass large" id="experience">
            <h3>Journey & Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="date">2024 - Present</span>
                <h4>Freelance Full Stack Developer</h4>
                <p>Building custom web solutions for diverse clients, focusing on e-commerce and internal tooling.</p>
              </div>
               <div className="timeline-item">
                <span className="date">2022 - 2024</span>
                <h4>Junior Developer @ TechStartup Inc.</h4>
                <p>Maintained a React Native codebase and migrated legacy backend services to Node.js microservices.</p>
              </div>
            </div>
          </div>
          
           {/* TESTIMONIAL */}
          <div className="card glass highlight-card">
            <p className="quote">"Delivered the project two weeks ahead of schedule. The code quality was exceptional and the final design exceeded our expectations."</p>
            <div className="client-info">
              <span className="client-name">— Sarah Jenkins, CEO of StartUpX</span>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="footer">
          <h2>Let's build something amazing together.</h2>
          <a href="mailto:email@example.com" className="btn primary big">Get in Touch</a>
          <p className="copyright">© 2026 Developer Portfolio. Built with Next.js</p>
        </footer>

      </main>

      {/* CSS STYLES */}
      <style jsx global>{`
        :root {
          --bg: #050505;
          --glass: rgba(255, 255, 255, 0.05);
          --border: rgba(255, 255, 255, 0.1);
          --accent: #fff;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: #eee;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          line-height: 1.6;
        }
        
        h1, h2, h3, h4 { color: #fff; margin-top: 0; }
        p { color: #aaa; font-size: 0.95rem; }
        a { text-decoration: none; color: inherit; transition: 0.3s; }

        /* GLOW ANIMATION */
        .glow-orb {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.4;
        }
        .purple { top: -100px; left: -100px; background: #7c3aed; animation: pulse 10s infinite alternate; }
        .blue { bottom: -100px; right: -100px; background: #2563eb; animation: pulse 8s infinite alternate-reverse; }
        
        @keyframes pulse {
            0% { transform: scale(1) translate(0,0); }
            100% { transform: scale(1.2) translate(50px, 50px); }
        }

        /* LAYOUT & NAV */
        .container { min-height: 100vh; position: relative; }
        .content { max-width: 1000px; margin: 0 auto; padding: 20px; opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .content.visible { opacity: 1; transform: translateY(0); }

        .nav { display: flex; justify-content: space-between; align-items: center; padding: 30px 0; margin-bottom: 60px; }
        .logo { font-weight: 800; letter-spacing: 1px; font-size: 1.1rem; }
        .nav-links a { margin-left: 25px; font-size: 0.9rem; color: #aaa; }
        .nav-links a:hover, .contact-link { color: #fff; }
        .contact-link { border: 1px solid var(--border); padding: 8px 16px; border-radius: 50px; background: var(--glass); }

        /* HERO SPLIT */
        .hero-split { display: flex; flex-direction: column-reverse; gap: 40px; align-items: center; margin-bottom: 100px; }
        @media (min-width: 768px) {
             .hero-split { flex-direction: row; justify-content: space-between; text-align: left; }
             .hero-text { max-width: 60%; }
        }
        
        h1 { font-size: 3rem; line-height: 1.1; letter-spacing: -1px; margin-bottom: 20px; }
        .gradient-text { background: linear-gradient(to right, #fff, #888); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { font-size: 1.1rem; max-width: 500px; margin-bottom: 30px; }
        
        .profile-img-container { width: 200px; height: 200px; border-radius: 30px; padding: 10px; transform: rotate(3deg); }
        .profile-img { width: 100%; height: 100%; object-fit: cover; border-radius: 24px; }

        /* BUTTONS */
        .hero-btns { display: flex; gap: 15px; }
        .btn { padding: 12px 24px; border-radius: 100px; font-weight: 600; font-size: 0.9rem; }
        .primary { background: #fff; color: #000; }
        .primary:hover { background: #ddd; }
        .secondary { border: 1px solid var(--border); background: var(--glass); color: #fff; }
        .secondary:hover { border-color: #fff; }

        /* BENTO GRID */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; }
        .large { grid-column: span 1; }
        @media (min-width: 768px) { .large { grid-column: span 2; } }

        .card { background: var(--glass); border: 1px solid var(--border); padding: 30px; border-radius: 24px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: all 0.3s; display: flex; flex-direction: column; }
        .card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.08); }
        
        /* PROJECT CARDS */
        .project-card { padding: 0; overflow: hidden; }
        .project-thumb { width: 100%; height: 220px; object-fit: cover; border-bottom: 1px solid var(--border); }
        .project-content { padding: 25px; }
        .project-header { display: flex; justify-content: space-between; }
        .arrow { font-size: 1.2rem; }

        /* TAGS */
        .tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: auto; padding-top: 20px; }
        .tag { font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 50px; border: 1px solid var(--border); color: #ccc; }
        .highlight { background: #fff; color: #000; border: none; font-weight: 700; }

        /* EXPERIENCE TIMELINE */
        .timeline { margin-top: 20px; }
        .timeline-item { border-left: 2px solid var(--border); padding-left: 20px; padding-bottom: 30px; position: relative; }
        .timeline-item::before { content: ''; position: absolute; left: -6px; top: 0; width: 10px; height: 10px; background: #fff; border-radius: 50%; }
        .timeline-item:last-child { padding-bottom: 0; }
        .date { font-size: 0.8rem; color: #888; display: block; margin-bottom: 5px; }
        .timeline-item h4 { margin-bottom: 5px; }

        /* TESTIMONIAL */
        .highlight-card { background: linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0)); border-color: rgba(255,255,255,0.2); }
        .quote { font-size: 1.1rem; font-style: italic; color: #fff; }
        .client-info { margin-top: 20px; font-weight: 600; color: #ccc; }

        /* FOOTER */
        .footer { margin-top: 120px; text-align: center; padding-bottom: 60px; }
        .footer h2 { font-size: 2rem; margin-bottom: 30px; }
        .big { padding: 15px 35px; font-size: 1rem; }
        .copyright { margin-top: 60px; font-size: 0.8rem; }
      `}</style>
    </div>
  )
}
