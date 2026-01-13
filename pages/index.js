import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function InteractivePortfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [showModal, setShowModal] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "Full Stack Developer."

  // Projects Data
  const projects = [
    { id: 1, title: 'Inventory SaaS', category: 'Backend', desc: 'Real-time stock tracking with WebSockets.', tags: ['Next.js', 'Supabase'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Crypto Tracker', category: 'Mobile', desc: 'Live price tracking app for iOS/Android.', tags: ['React Native', 'API'], img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'E-Commerce AI', category: 'Frontend', desc: 'AI-powered product recommendations.', tags: ['OpenAI', 'React'], img: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Bank API Core', category: 'Backend', desc: 'Secure transaction processing system.', tags: ['Node.js', 'Docker'], img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' },
  ]

  // Filter Logic
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // Typing Effect
  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Portfolio | Interactive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="glow-orb purple" />
      <div className="glow-orb blue" />

      {/* MODAL OVERLAY */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Let's Work Together!</h3>
            <p>I am currently available for new projects.</p>
            <a href="mailto:email@example.com" className="modal-btn">Send Email</a>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <main className={`content ${mounted ? 'visible' : ''}`}>
        
        {/* NAV */}
        <nav className="nav">
          <span className="logo">DEV.PORTFOLIO</span>
          <button className="contact-btn" onClick={() => setShowModal(true)}>Hire Me</button>
        </nav>

        {/* HERO WITH TYPING EFFECT */}
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Available for work</span>
            <h1>
              I am a <br />
              <span className="gradient-text">{typedText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="subtitle">
              Interactive experiences built with code. 
              Focusing on <b>React</b>, <b>Next.js</b>, and <b>Animation</b>.
            </p>
          </div>
        </section>

        {/* INTERACTIVE FILTER TABS */}
        <section className="portfolio-section">
          <div className="tabs">
            {['All', 'Frontend', 'Backend', 'Mobile'].map(cat => (
              <button 
                key={cat} 
                className={`tab ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="card glass project-card">
                <div className="img-wrapper">
                  <img src={project.img} alt={project.title} className="project-img" />
                  <div className="overlay">
                    <button className="view-btn">View Code</button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="category-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tags">
                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* STYLES */}
      <style jsx global>{`
        :root {
          --bg: #050505;
          --glass: rgba(255, 255, 255, 0.05);
          --border: rgba(255, 255, 255, 0.1);
          --primary: #3b82f6;
        }
        body { margin: 0; background: var(--bg); color: #eee; font-family: sans-serif; overflow-x: hidden; }
        
        /* MODAL STYLES */
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
          display: flex; justify-content: center; align-items: center; z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #111; border: 1px solid #333; padding: 40px; border-radius: 20px;
          text-align: center; max-width: 90%; width: 400px;
          animation: slideUp 0.3s ease;
        }
        .modal-btn { display: block; background: #fff; color: #000; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }
        .close-btn { background: transparent; border: none; color: #888; cursor: pointer; }
        
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        /* TYPING CURSOR */
        .cursor { display: inline-block; width: 3px; background: #fff; animation: blink 1s infinite; margin-left: 5px; }
        @keyframes blink { 50% { opacity: 0; } }

        /* TABS */
        .tabs { display: flex; gap: 10px; margin-bottom: 30px; overflow-x: auto; padding-bottom: 10px; }
        .tab {
          background: transparent; border: 1px solid #333; color: #888; padding: 8px 20px;
          border-radius: 50px; cursor: pointer; transition: 0.3s; font-size: 0.9rem;
        }
        .tab.active { background: #fff; color: #000; border-color: #fff; }

        /* CARDS WITH HOVER EFFECT */
        .project-card { padding: 0 !important; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.3); }
        
        .img-wrapper { position: relative; height: 200px; overflow: hidden; }
        .project-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .project-card:hover .project-img { transform: scale(1.1); }
        
        .overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6); opacity: 0; transition: 0.3s;
          display: flex; justify-content: center; align-items: center;
        }
        .project-card:hover .overlay { opacity: 1; }
        .view-btn { padding: 10px 20px; background: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; }

        .card-body { padding: 20px; }
        .category-tag { font-size: 0.7rem; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
        
        /* STANDARD STYLES */
        .glow-orb { position: fixed; width: 300px; height: 300px; border-radius: 50%; filter: blur(90px); z-index: -1; opacity: 0.4; }
        .purple { top: -50px; left: -50px; background: #7c3aed; }
        .blue { bottom: -50px; right: -50px; background: #2563eb; }
        
        .container { min-height: 100vh; max-width: 1000px; margin: 0 auto; padding: 20px; }
        .nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
        .logo { font-weight: bold; font-size: 1.2rem; }
        .contact-btn { background: #fff; color: #000; border: none; padding: 10px 20px; border-radius: 50px; font-weight: bold; cursor: pointer; }
        
        .hero { margin-bottom: 80px; }
        .badge { border: 1px solid #333; padding: 5px 10px; border-radius: 50px; font-size: 0.8rem; color: #4ade80; background: rgba(74, 222, 128, 0.1); }
        h1 { font-size: 3rem; margin: 20px 0; line-height: 1.1; }
        .gradient-text { background: linear-gradient(to right, #fff, #888); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { color: #888; max-width: 500px; line-height: 1.6; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: var(--glass); border: 1px solid var(--border); border-radius: 16px; backdrop-filter: blur(10px); }
        h3 { margin: 10px 0; }
        p { color: #aaa; font-size: 0.9rem; margin-bottom: 15px; }
        .tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .tag { font-size: 0.75rem; background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; color: #ccc; }
      `}</style>
    </div>
  )
}
