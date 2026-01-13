import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function AdvancedPortfolio() {
  const [mounted, setMounted] = useState(false)

  // Trigger animations after load
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Dev Portfolio | Pro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Injecting CSS directly for advanced effects without external CSS files */}
        <style>{`
          :root {
            --bg: #050505;
            --card-bg: rgba(255, 255, 255, 0.03);
            --card-border: rgba(255, 255, 255, 0.1);
            --accent: #3b82f6;
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
          }
          
          body {
            margin: 0;
            background-color: var(--bg);
            color: var(--text-primary);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            overflow-x: hidden;
          }

          /* BACKGROUND GLOW EFFECT */
          .glow-bg {
            position: fixed;
            top: -20%;
            left: -20%;
            width: 70vw;
            height: 70vw;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            filter: blur(60px);
          }
          
          .glow-bg-2 {
            position: fixed;
            bottom: -20%;
            right: -20%;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            filter: blur(60px);
          }

          .main-content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .main-content.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* HERO SECTION */
          .hero {
            padding: 100px 0 60px 0;
          }
          
          h1 {
            font-size: 4rem;
            line-height: 1;
            letter-spacing: -2px;
            margin-bottom: 20px;
            background: linear-gradient(to bottom right, #fff 30%, #666);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .role-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 50px;
            background: rgba(59, 130, 246, 0.1);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.2);
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 20px;
          }

          /* BENTO GRID LAYOUT */
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 60px;
          }
          
          .card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            padding: 30px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .card:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
          }
          
          .card-large {
            grid-column: span 1;
          }
          
          @media (min-width: 768px) {
            .card-large {
              grid-column: span 2;
            }
          }

          .card-title {
            font-size: 1.5rem;
            margin: 0 0 10px 0;
            font-weight: 600;
          }
          
          .card-desc {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 1rem;
          }

          /* TECH PILLS */
          .pill-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
          }
          
          .pill {
            font-size: 0.8rem;
            padding: 6px 12px;
            border-radius: 8px;
            background: rgba(255,255,255,0.05);
            color: #ccc;
          }

          /* BUTTONS */
          .btn {
            display: inline-flex;
            align-items: center;
            padding: 12px 24px;
            background: #fff;
            color: #000;
            border-radius: 100px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 30px;
            transition: transform 0.2s;
          }
          
          .btn:hover {
            transform: scale(1.05);
          }

        `}</style>
      </Head>

      {/* Background Orbs */}
      <div className="glow-bg" />
      <div className="glow-bg-2" />

      <main className={`main-content ${mounted ? 'visible' : ''}`}>
        
        {/* HERO */}
        <div className="hero">
          <span className="role-badge">Open for Work</span>
          <h1>Full Stack<br />Developer.</h1>
          <p style={{color: '#a1a1aa', fontSize: '1.2rem', maxWidth: '500px'}}>
            I build accessible, pixel-perfect, performant, and secure web applications.
            Expertise in the React ecosystem.
          </p>
          <a href="mailto:email@example.com" className="btn">
            Download CV →
          </a>
        </div>

        {/* BENTO GRID */}
        <div className="bento-grid">
          
          {/* ABOUT CARD */}
          <div className="card card-large">
            <h3 style={{color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '10px'}}>About</h3>
            <p className="card-desc">
              With 2 years of hands-on experience, I bridge the gap between design and engineering. 
              I have scaled applications from 0 to 10,000+ users and enjoy solving complex database architecture problems.
            </p>
          </div>

          {/* STACK CARD */}
          <div className="card">
            <h3 className="card-title">The Stack</h3>
            <div className="pill-container">
              {['Next.js 14', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'].map(tech => (
                <span key={tech} className="pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* PROJECT 1 */}
          <div className="card card-large">
            <h3 className="card-title">Project: FinTech Dashboard</h3>
            <p className="card-desc">
              A high-performance financial dashboard handling real-time socket connections for stock data.
              Reduced load times by 40% using Next.js Server Components.
            </p>
            <div className="pill-container">
              <span className="pill" style={{background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa'}}>Live Demo ↗</span>
              <span className="pill">Recharts</span>
              <span className="pill">WebSockets</span>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="card">
            <h3 className="card-title">E-Commerce Core</h3>
            <p className="card-desc">
              Headless Shopify solution with custom checkout flow and automated inventory syncing.
            </p>
            <div className="pill-container">
              <span className="pill">Shopify API</span>
              <span className="pill">Redis</span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <h3 className="card-title">Let's Connect</h3>
            <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
               <a href="#" style={{color: '#fff'}}>GitHub</a>
               <a href="#" style={{color: '#fff'}}>LinkedIn</a>
               <a href="#" style={{color: '#fff'}}>Twitter</a>
            </div>
          </div>

        </div>

        <footer style={{marginTop: '100px', borderTop: '1px solid #222', paddingTop: '40px', color: '#444', textAlign: 'center'}}>
          <p>© 2026 Developer Portfolio. Built with Next.js</p>
        </footer>

      </main>
    </div>
  )
}
