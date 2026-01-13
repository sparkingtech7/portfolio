import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function IDEPortfolio() {
  const [activeFile, setActiveFile] = useState('home.tsx')
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [terminalLine, setTerminalLine] = useState('Compiled successfully in 450ms')

  // Toggle sidebar on mobile
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  // File Content Components - FIXED: Added the function wrapper here
  const renderContent = () => {
    switch(activeFile) {
      case 'home.tsx':
        return <HomeFile />
      case 'about.md':
        return <AboutFile />
      case 'projects.json':
        return <ProjectsFile />
      case 'contact.css':
        return <ContactFile />
      default:
        return <HomeFile />
    }
  }

  return (
    <div className="ide-container">
      <Head>
        <title>DevEnv | {activeFile}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* TOP ACTIVITY BAR */}
      <div className="activity-bar">
        <div className="icon active">📁</div>
        <div className="icon">🔍</div>
        <div className="icon">🐙</div>
        <div className="icon bottom">⚙️</div>
      </div>

      {/* SIDEBAR EXPLORER */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <span>EXPLORER</span>
          <button onClick={toggleSidebar} className="close-btn">×</button>
        </div>
        <div className="folder">
          <div className="folder-name">▼ PORTFOLIO-V2</div>
          <div className="file-list">
            <FileItem name="home.tsx" icon="⚛️" active={activeFile} set={setActiveFile} />
            <FileItem name="about.md" icon="📝" active={activeFile} set={setActiveFile} />
            <FileItem name="projects.json" icon="{}" active={activeFile} set={setActiveFile} />
            <FileItem name="contact.css" icon="#" active={activeFile} set={setActiveFile} />
          </div>
        </div>
      </div>

      {/* MAIN EDITOR AREA */}
      <div className="editor-area">
        
        {/* TABS */}
        <div className="tabs-header">
          <button className="mobile-menu" onClick={toggleSidebar}>☰</button>
          <div className="tab active">
            <span className="tab-icon">{getFileIcon(activeFile)}</span>
            {activeFile}
            <span className="close-tab">×</span>
          </div>
        </div>

        {/* CODE CONTENT */}
        <div className="code-view">
          <div className="line-numbers">
            {Array.from({length: 20}, (_, i) => <div key={i}>{i+1}</div>)}
          </div>
          <div className="code-content">
            {renderContent()}
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="status-bar">
          <div className="status-left">
            <span>main*</span>
            <span>0 errors</span>
            <span>2 warnings</span>
          </div>
          <div className="status-right">
            <span>Ln 12, Col 42</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
            <span>Prettier</span>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        :root {
          --bg-dark: #1e1e1e;
          --bg-sidebar: #252526;
          --bg-activity: #333333;
          --accent: #007acc;
          --text: #d4d4d4;
          --keyword: #569cd6;
          --string: #ce9178;
          --func: #dcdcaa;
          --class: #4ec9b0;
        }
        body { margin: 0; background: var(--bg-dark); color: var(--text); font-family: 'Consolas', 'Monaco', monospace; overflow: hidden; height: 100vh; }
        
        .ide-container { display: flex; height: 100vh; width: 100vw; }
        
        /* Activity Bar (Leftmost) */
        .activity-bar { width: 50px; background: var(--bg-activity); display: flex; flex-direction: column; align-items: center; padding-top: 10px; }
        .icon { font-size: 24px; margin-bottom: 20px; opacity: 0.5; cursor: pointer; }
        .icon.active { opacity: 1; border-left: 2px solid white; }
        .icon.bottom { margin-top: auto; margin-bottom: 10px; }

        /* Sidebar (Explorer) */
        .sidebar { width: 250px; background: var(--bg-sidebar); display: flex; flex-direction: column; transition: 0.3s; }
        .sidebar.closed { display: none; }
        .sidebar-header { padding: 10px; font-size: 0.8rem; font-weight: bold; display: flex; justify-content: space-between; }
        .folder-name { padding: 5px 10px; font-weight: bold; font-size: 0.8rem; margin-top: 10px; }
        .file-item { padding: 5px 20px; cursor: pointer; display: flex; gap: 8px; font-size: 0.9rem; }
        .file-item:hover { background: #2a2d2e; }
        .file-item.active { background: #37373d; }
        .close-btn { background: none; border: none; color: white; cursor: pointer; display: none; }
        
        @media (max-width: 768px) {
          .sidebar { position: absolute; z-index: 100; height: 100%; box-shadow: 5px 0 10px rgba(0,0,0,0.5); }
          .activity-bar { display: none; }
          .close-btn { display: block; }
          .mobile-menu { display: block !important; margin-right: 10px; background: none; border: none; color: white; cursor: pointer; }
        }

        /* Editor Area */
        .editor-area { flex: 1; display: flex; flex-direction: column; background: var(--bg-dark); }
        .tabs-header { background: #2d2d2d; display: flex; align-items: center; }
        .mobile-menu { display: none; }
        .tab { background: var(--bg-dark); padding: 10px 15px; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; border-top: 1px solid var(--accent); }
        .tab-icon { font-size: 1rem; }
        .close-tab { margin-left: 10px; font-size: 1.1rem; }

        .code-view { flex: 1; display: flex; overflow: auto; position: relative; }
        .line-numbers { width: 50px; text-align: right; padding-right: 15px; color: #858585; padding-top: 20px; font-size: 0.9rem; user-select: none; }
        .code-content { padding: 20px 0; flex: 1; font-size: 1rem; line-height: 1.6; }

        /* Status Bar */
        .status-bar { height: 25px; background: var(--accent); display: flex; justify-content: space-between; align-items: center; padding: 0 10px; font-size: 0.75rem; color: white; }
        .status-left, .status-right { display: flex; gap: 15px; }

        /* SYNTAX HIGHLIGHTING CLASSES */
        .kw { color: var(--keyword); } /* Keyword */
        .str { color: var(--string); } /* String */
        .fn { color: var(--func); } /* Function */
        .cls { color: var(--class); } /* Class */
        .comment { color: #6a9955; }
        .tag { color: var(--keyword); }
        .attr { color: #9cdcfe; }

        /* Animations */
        .cursor { display: inline-block; width: 2px; height: 1.2em; background: white; animation: blink 1s infinite; vertical-align: text-bottom; }
        @keyframes blink { 50% { opacity: 0; } }

        button.btn { background: var(--accent); color: white; border: none; padding: 8px 16px; cursor: pointer; margin-top: 10px; }
        button.btn:hover { opacity: 0.9; }
      `}</style>
    </div>
  )
}

// --- HELPER COMPONENTS ---

function FileItem({ name, icon, active, set }) {
  return (
    <div className={`file-item ${active === name ? 'active' : ''}`} onClick={() => set(name)}>
      <span>{icon}</span> {name}
    </div>
  )
}

function getFileIcon(name) {
  if (name.includes('react')) return '⚛️';
  if (name.includes('json')) return '{}';
  if (name.includes('css')) return '#';
  return '📄';
}

// --- PAGE CONTENTS (The "Pages" inside the IDE) ---

function HomeFile() {
  const [text, setText] = useState('')
  const fullText = "Building the future, one commit at a time..."
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i+1))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div><span className="kw">import</span> React <span className="kw">from</span> <span className="str">'react'</span>;</div>
      <br/>
      <div><span className="kw">export default function</span> <span className="fn">Hero</span>() {'{'}</div>
      <div style={{paddingLeft: 20}}>
        <div><span className="kw">const</span> developer = {'{'}</div>
        <div style={{paddingLeft: 20}}>
          name: <span className="str">"Client Name"</span>,</div>
        <div style={{paddingLeft: 20}}>
          role: <span className="str">"Full Stack Engineer"</span>,</div>
        <div style={{paddingLeft: 20}}>
          exp: <span className="str">"2 Years"</span></div>
        <div>{'}'};</div>
        <br/>
        <div><span className="kw">return</span> (</div>
        <div style={{paddingLeft: 20}}>
          &lt;<span className="tag">div</span> <span className="attr">className</span>=<span className="str">"intro"</span>&gt;</div>
        <div style={{paddingLeft: 40}}>
           &lt;<span className="tag">h1</span>&gt;Hello World&lt;/<span className="tag">h1</span>&gt;</div>
        <div style={{paddingLeft: 40}}>
           &lt;<span className="tag">p</span>&gt;<span style={{color: '#fff'}}>{text}</span><span className="cursor"></span>&lt;/<span className="tag">p</span>&gt;</div>
        <div style={{paddingLeft: 20}}>&lt;/<span className="tag">div</span>&gt;</div>
        <div>);</div>
      </div>
      <div>{'}'}</div>
      <br/>
      <div className="comment">// Click files in the sidebar to explore 👈</div>
    </div>
  )
}

function AboutFile() {
  return (
    <div style={{fontFamily: 'sans-serif', maxWidth: 600, padding: 20, color: '#ccc'}}>
      <h1 style={{borderBottom: '1px solid #444', paddingBottom: 10}}># About Me</h1>
      <p>I am a passionate developer focused on **MERN Stack** and **Next.js**.</p>
      <br/>
      <h3>## Technical Skills</h3>
      <ul>
        <li>Frontend: React, Tailwind, Redux</li>
        <li>Backend: Node.js, Express, Python</li>
        <li>Database: MongoDB, PostgreSQL</li>
        <li>DevOps: Docker, AWS, Vercel</li>
      </ul>
      <br/>
      <h3>## Work History</h3>
      <p><strong>2024 - Present:</strong> Freelance Developer</p>
      <p>Delivered 10+ projects for international clients.</p>
    </div>
  )
}

function ProjectsFile() {
  return (
    <div>
      <span className="kw">const</span> <span className="cls">projects</span> = [
      <div style={{paddingLeft: 20}}>
        {'{'}
        <div style={{paddingLeft: 20}}>
          "id": 1,<br/>
          "name": <span className="str">"E-Commerce Core"</span>,<br/>
          "tech": [<span className="str">"Next.js"</span>, <span className="str">"Stripe"</span>],<br/>
          "link": <span className="str">"github.com/demo/shop"</span>
        </div>
        {'},'}
      </div>
      <div style={{paddingLeft: 20}}>
        {'{'}
        <div style={{paddingLeft: 20}}>
          "id": 2,<br/>
          "name": <span className="str">"AI Chatbot"</span>,<br/>
          "tech": [<span className="str">"OpenAI API"</span>, <span className="str">"Python"</span>],<br/>
          "link": <span className="str">"github.com/demo/bot"</span>
        </div>
        {'},'}
      </div>
      ];
    </div>
  )
}

function ContactFile() {
  return (
    <div>
      <span className="kw">.contact-form</span> {'{'}
      <div style={{paddingLeft: 20}}>
        <span className="attr">display</span>: <span className="str">flex</span>;
      </div>
      <div style={{paddingLeft: 20}}>
        <span className="attr">email</span>: <span className="str">"hello@client.com"</span>;
      </div>
      <div style={{paddingLeft: 20}}>
        <span className="attr">status</span>: <span className="str">"Open for Hire"</span>;
      </div>
      {'}'}
      <br/><br/>
      <div className="comment">/* Send me an email to start a project */</div>
      <button className="btn" onClick={() => window.location.href='mailto:email@example.com'}>Email Me</button>
    </div>
  )
}
