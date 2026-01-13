import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

export default function CyberPortfolio() {
  const [booting, setBooting] = useState(true)
  const [bootLog, setBootLog] = useState([])
  const [activeTab, setActiveTab] = useState('DASHBOARD')
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'Welcome to PORTFOLIO_OS v2.0' },
    { type: 'system', content: 'Type "help" for available commands.' }
  ])
  const terminalEndRef = useRef(null)

  // BOOT SEQUENCE ANIMATION
  useEffect(() => {
    const logs = [
      "INITIALIZING KERNEL...",
      "LOADING NEXT.JS MODULES...",
      "CONNECTING TO GITHUB API...",
      "DECRYPTING SECURE DATA...",
      "RENDERING GRAPHICS ENGINE...",
      "ACCESS GRANTED."
    ]
    
    let delay = 0
    logs.forEach((log, i) => {
      delay += Math.random() * 500 + 300
      setTimeout(() => {
        setBootLog(prev => [...prev, log])
        if (i === logs.length - 1) {
          setTimeout(() => setBooting(false), 800)
        }
      }, delay)
    })
  }, [])

  // SCROLL TERMINAL TO BOTTOM
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [terminalHistory])

  // TERMINAL LOGIC
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase()
      let response = ''
      
      switch(cmd) {
        case 'help': response = 'COMMANDS: about, skills, projects, contact, clear'; break;
        case 'about': response = 'USER: Full Stack Dev | LEVEL: 2 Years | SPECIALTY: React Ecosystem'; break;
        case 'skills': response = 'LOADING STACK... Next.js, Node.js, PostgreSQL, Docker, AWS'; break;
        case 'contact': response = 'EMAIL: dev@example.com | STATUS: Open for work'; break;
        case 'clear': setTerminalHistory([]); setTerminalInput(''); return;
        default: response = `ERROR: Command "${cmd}" not recognized.`;
      }

      setTerminalHistory(prev => [...prev, { type: 'user', content: `> ${cmd}` }, { type: 'system', content: response }])
      setTerminalInput('')
    }
  }

  // RENDER BOOT SCREEN
  if (booting) {
    return (
      <div className="boot-screen">
        <div className="scanline"></div>
        <div className="boot-container">
          {bootLog.map((log, i) => (
            <div key={i} className="boot-line">
              <span className="timestamp">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))}
          <div className="cursor-block">_</div>
        </div>
        <style jsx>{`
          .boot-screen { background: #000; height: 100vh; color: #0f0; font-family: 'Courier New', monospace; padding: 20px; overflow: hidden; position: relative; }
          .boot-line { margin-bottom: 5px; font-size: 14px; text-shadow: 0 0 5px #0f0; }
          .timestamp { color: #080; margin-right: 10px; }
          .cursor-block { animation: blink 1s infinite; display: inline-block; width: 10px; height: 15px; background: #0f0; }
          .scanline { position: fixed; top: 0; left: 0; width: 100%; height: 5px; background: rgba(0, 255, 0, 0.3); opacity: 0.4; animation: scan 3s linear infinite; pointer-events: none; }
          @keyframes blink { 50% { opacity: 0; } }
          @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
        `}</style>
      </div>
    )
  }

  // MAIN INTERFACE
  return (
    <div className="cyber-container">
      <Head>
        <title>SYSTEM_READY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="scanlines"></div>
      <div className="noise"></div>

      {/* HEADER HUD */}
      <header className="hud-header">
        <div className="hud-left">
          <div className="sys-status">
            <span className="blink">●</span> ONLINE
          </div>
          <div className="sys-id">ID: DEV-001</div>
        </div>
        <div className="hud-center">
          <h1>CYBER.PORTFOLIO</h1>
        </div>
        <div className="hud-right">
          <div className="clock">{new Date().toLocaleTimeString()}</div>
        </div>
      </header>

      <main className="main-grid">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="cyber-sidebar">
          {['DASHBOARD', 'PROJECTS', 'TERMINAL', 'LOGS'].map(tab => (
            <button 
              key={tab}
              className={`cyber-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </aside>

        {/* CONTENT AREA */}
        <section className="content-frame">
          <div className="frame-corner tl"></div>
          <div className="frame-corner tr"></div>
          <div className="frame-corner bl"></div>
          <div className="frame-corner br"></div>

          {/* TAB: DASHBOARD */}
          {activeTab === 'DASHBOARD' && (
            <div className="dashboard-grid">
              <div className="cyber-card profile">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" className="cyber-img" />
                <h2 className="glitch" data-text="FULL STACK DEV">FULL STACK DEV</h2>
                <div className="stats">
                  <div className="stat-row"><span>EXP</span><div className="bar"><div className="fill" style={{width: '40%'}}></div></div></div>
                  <div className="stat-row"><span>REACT</span><div className="bar"><div className="fill" style={{width: '90%'}}></div></div></div>
                  <div className="stat-row"><span>NODE</span><div className="bar"><div className="fill" style={{width: '85%'}}></div></div></div>
                </div>
              </div>

              <div className="cyber-card message">
                <h3>// SYSTEM MESSAGE</h3>
                <p>
                  Welcome user. I engineer robust digital architectures. 
                  Current objective: Seeking new freelance contracts.
                  Secure connection established.
                </p>
                <button className="action-btn">INITIATE_CONTACT()</button>
              </div>
            </div>
          )}

          {/* TAB: PROJECTS */}
          {activeTab === 'PROJECTS' && (
            <div className="projects-grid">
              {[1, 2, 3].map(i => (
                <div key={i} className="project-node">
                  <div className="node-header">
                    <span>PRJ_0{i}</span>
                    <span className="status">SECURE</span>
                  </div>
                  <h3>Crypto_Exchange_v{i}.0</h3>
                  <p>High-frequency trading interface built with WebSockets and Next.js.</p>
                  <div className="tech-line">
                    <span>REACT</span><span>NODE</span><span>SQL</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: TERMINAL */}
          {activeTab === 'TERMINAL' && (
            <div className="terminal-window">
              <div className="terminal-output">
                {terminalHistory.map((line, i) => (
                  <div key={i} className={`term-line ${line.type}`}>
                    {line.content}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <div className="terminal-input-area">
                <span className="prompt">{'>'}</span>
                <input 
                  type="text" 
                  value={terminalInput}
                  onChange={e => setTerminalInput(e.target.value)}
                  onKeyDown={handleCommand}
                  autoFocus
                  placeholder="Type 'help'..."
                />
              </div>
            </div>
          )}
        </section>

      </main>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        :root {
          --cyber-black: #050505;
          --cyber-green: #00ff41;
          --cyber-dim: #003b00;
          --cyber-cyan: #0ff;
          --font-mono: 'Courier New', monospace;
        }

        body {
          background-color: var(--cyber-black);
          color: var(--cyber-green);
          font-family: var(--font-mono);
          margin: 0;
          overflow: hidden; /* Prevent native scroll */
          height: 100vh;
        }

        /* CRT EFFECTS */
        .scanlines {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
          pointer-events: none; z-index: 100;
        }
        .noise {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          opacity: 0.05; z-index: 99; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* LAYOUT */
        .cyber-container { display: flex; flex-direction: column; height: 100vh; padding: 10px; box-sizing: border-box; }
        
        .hud-header {
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 2px solid var(--cyber-green);
          padding-bottom: 10px; margin-bottom: 20px;
          text-shadow: 0 0 10px var(--cyber-green);
        }
        .sys-status .blink { animation: blink 2s infinite; color: var(--cyber-green); }

        .main-grid { display: grid; grid-template-columns: 80px 1fr; gap: 20px; height: 100%; }
        @media (max-width: 600px) { .main-grid { grid-template-columns: 1fr; grid-template-rows: auto 1fr; } }

        /* SIDEBAR */
        .cyber-sidebar { display: flex; flex-direction: column; gap: 10px; }
        @media (max-width: 600px) { .cyber-sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 10px; } }

        .cyber-btn {
          background: black; border: 1px solid var(--cyber-dim); color: var(--cyber-dim);
          padding: 15px 5px; cursor: pointer; font-family: var(--font-mono); font-weight: bold;
          transition: 0.3s;
          writing-mode: vertical-rl; text-orientation: mixed;
        }
        @media (max-width: 600px) { .cyber-btn { writing-mode: horizontal-tb; padding: 10px 20px; } }

        .cyber-btn:hover, .cyber-btn.active {
          background: var(--cyber-dim); color: var(--cyber-green); border-color: var(--cyber-green);
          box-shadow: 0 0 15px var(--cyber-dim);
        }

        /* CONTENT FRAME */
        .content-frame {
          border: 1px solid var(--cyber-dim); position: relative; padding: 20px;
          background: rgba(0, 20, 0, 0.3); overflow-y: auto;
        }
        .frame-corner { position: absolute; width: 10px; height: 10px; border: 2px solid var(--cyber-green); transition: 0.3s; }
        .tl { top: -1px; left: -1px; border-bottom: none; border-right: none; }
        .tr { top: -1px; right: -1px; border-bottom: none; border-left: none; }
        .bl { bottom: -1px; left: -1px; border-top: none; border-right: none; }
        .br { bottom: -1px; right: -1px; border-top: none; border-left: none; }

        /* DASHBOARD */
        .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        
        .cyber-card { border: 1px solid var(--cyber-dim); padding: 20px; position: relative; }
        .cyber-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--cyber-green); transform: scaleX(0); transition: 0.5s; transform-origin: left; }
        .cyber-card:hover::before { transform: scaleX(1); }

        .cyber-img { width: 80px; height: 80px; border-radius: 50%; border: 2px solid var(--cyber-green); filter: grayscale(100%) contrast(1.2); }
        
        .stat-row { display: flex; align-items: center; margin-top: 10px; gap: 10px; font-size: 0.8rem; }
        .bar { flex: 1; height: 8px; background: var(--cyber-dim); }
        .fill { height: 100%; background: var(--cyber-green); box-shadow: 0 0 10px var(--cyber-green); }

        .action-btn {
          margin-top: 20px; background: var(--cyber-green); color: black; border: none;
          padding: 10px 20px; font-weight: bold; font-family: var(--font-mono); cursor: pointer;
        }

        /* GLITCH TEXT */
        .glitch { position: relative; }
        .glitch::before, .glitch::after {
          content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8;
        }
        .glitch::before { color: #f0f; clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); transform: translate(-2px); animation: glitch 2s infinite linear alternate-reverse; }
        .glitch::after { color: #0ff; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); transform: translate(2px); animation: glitch 2.5s infinite linear alternate-reverse; }
        
        @keyframes glitch { 0% { transform: translate(0) } 20% { transform: translate(-2px, 2px) } 40% { transform: translate(-2px, -2px) } 60% { transform: translate(2px, 2px) } 80% { transform: translate(2px, -2px) } 100% { transform: translate(0) } }

        /* PROJECTS */
        .project-node { border: 1px dashed var(--cyber-dim); padding: 15px; transition: 0.3s; }
        .project-node:hover { border-color: var(--cyber-green); background: rgba(0,255,65,0.05); }
        .node-header { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--cyber-dim); margin-bottom: 10px; }
        .tech-line span { margin-right: 10px; font-size: 0.7rem; border: 1px solid var(--cyber-dim); padding: 2px 5px; }

        /* TERMINAL */
        .terminal-window { background: black; border: 1px solid #333; padding: 10px; height: 100%; display: flex; flex-direction: column; }
        .terminal-output { flex: 1; overflow-y: auto; margin-bottom: 10px; font-size: 0.9rem; }
        .term-line { margin-bottom: 5px; }
        .term-line.user { color: #fff; }
        .term-line.system { color: var(--cyber-green); }
        .terminal-input-area { display: flex; gap: 10px; }
        .prompt { color: var(--cyber-green); }
        .terminal-input-area input {
          background: transparent; border: none; color: white; font-family: var(--font-mono); flex: 1; outline: none;
        }
      `}</style>
    </div>
  )
}
