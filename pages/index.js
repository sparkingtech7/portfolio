import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Portfolio | Full Stack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* BACKGROUND ORBS */}
      <div className="glow-orb purple" />
      <div className="glow-orb blue" />

      <main className={`content ${mounted ? 'visible' : ''}`}>
        
        {/* NAV */}
        <nav className="nav">
          <span className="logo">DEV.PORTFOLIO</span>
          <span className="status">● Available</span>
        </nav>

        {/* HERO */}
        <section className="hero">
          <h1>
            Full Stack<br />
            <span className="gradient-text">Developer.</span>
          </h1>
          <p className="subtitle">
            I build high-performance web applications with <b>Next.js</b> and <b>Node.js</b>.
            Focused on clean code and user experience.
          </p>
        </section>

        {/* BENTO GRID */}
        <div className="grid">
          
          {/* CARD 1 - ABOUT */}
          <div className="card large glass">
            <h3>About Me</h3>
            <p>
              2 years of experience building scalable software. I bridge the gap between 
              backend logic and frontend design.
            </p>
          </div>

          {/* CARD 2 - STACK */}
          <div className="card glass">
            <h3>The Stack</h3>
            <div className="tags">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'SQL', 'Docker'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* CARD 3 - PROJECT A */}
          <div className="card large glass project-card">
            <div className="project-header">
              <h3>Inventory Dashboard</h3>
              <span className="arrow">↗</span>
            </div>
            <p>A SaaS platform for tracking real-time stock levels using WebSockets.</p>
            <div className="tags">
              <span className="tag highlight">Live Demo</span>
              <span className="tag">Supabase</span>
            </div>
          </div>

          {/* CARD 4 - PROJECT B */}
          <div className="card glass">
            <h3>Crypto API</h3>
            <p>High-frequency data tracking for crypto prices.</p>
            <span className="tag">Node.js</span>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="footer">
          <a href="mailto:email@example.com" className="hire-btn">Let's Work Together</a>
        </footer>

      </main>

      {/* STYLES - This is the fix. We use 'jsx global' to force styles to load. */}
      <style jsx global>{`
        :root {
          --bg: #050505;
          --glass: rgba(255, 255, 255, 0.05);
          --border: rgba(255, 255, 255, 0.1);
        }

        body {
          margin: 0;
          background: var(--bg);
          color: white;
          font-family: sans-serif;
          overflow-x: hidden;
        }

        /* AMBIENT LIGHTING (ORBS) */
        .glow-orb {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          opacity: 0.5; /* Made brighter */
        }
        .purple { top: -50px; left: -50px; background: #7c3aed; }
        .blue { bottom: -50px; right: -50px; background: #2563eb; }

        .container {
          min-height: 100vh;
          position: relative;
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }
        .content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* NAVIGATION */
        .nav {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          margin-bottom: 40px;
        }
        .logo { font-weight: bold; letter-spacing: 1px; }
        .status { font-size: 0.8rem; color: #4ade80; }

        /* TYPOGRAPHY */
        h1 { font-size: 3.5rem; line-height: 1; margin-bottom: 20px; letter-spacing: -2px; }
        .gradient-text {
          background: linear-gradient(to right, #fff, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle { color: #888; font-size: 1.1rem; line-height: 1.6; max-width: 500px; }

        /* GLASSMORPHISM CARDS */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive */
          gap: 20px;
          margin-top: 60px;
        }

        .card {
          background: var(--glass);
          border: 1px solid var(--border);
          padding: 25px;
          border-radius: 20px;
          backdrop-filter: blur(12px); /* The blur effect */
          -webkit-backdrop-filter: blur(12px); /* Safari support */
          transition: transform 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
        }

        .large { grid-column: span 1; }
        @media (min-width: 768px) {
          .large { grid-column: span 2; }
        }

        h3 { margin-top: 0; color: #ddd; }
        p { color: #888; line-height: 1.5; font-size: 0.95rem; }

        /* TAGS */
        .tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 15px; }
        .tag {
          font-size: 0.75rem;
          background: rgba(0,0,0,0.3);
          padding: 5px 10px;
          border-radius: 50px;
          color: #ccc;
          border: 1px solid #333;
        }
        .highlight { background: #fff; color: #000; border: none; font-weight: bold; }

        .footer { margin-top: 80px; text-align: center; padding-bottom: 40px; }
        .hire-btn {
          background: white;
          color: black;
          padding: 15px 30px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}
