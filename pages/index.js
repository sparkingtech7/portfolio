import Head from 'next/head'
import Link from 'next/link'

export default function Portfolio() {
  const styles = {
    container: { fontFamily: 'sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '20px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' },
    card: { backgroundColor: '#222', padding: '30px', borderRadius: '20px', border: '1px solid #333' },
    hero: { gridColumn: 'span 1', backgroundColor: '#1a1a1a' }, // Adjust span if needed
    h1: { fontSize: '2.5rem', margin: '0 0 10px 0', fontWeight: 'bold' },
    sub: { color: '#888', marginBottom: '30px' },
    btn: { backgroundColor: '#0070f3', color: 'white', padding: '12px 24px', borderRadius: '50px', border: 'none', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer' },
    tag: { display: 'inline-block', backgroundColor: '#333', padding: '5px 10px', borderRadius: '8px', fontSize: '12px', marginRight: '8px', marginBottom: '8px' },
    projectTitle: { fontSize: '1.5rem', margin: '0 0 10px 0' }
  }

  return (
    <div style={styles.container}>
      <Head>
        <title>Developer Portfolio</title>
      </Head>

      <main style={styles.grid}>
        
        {/* HERO SECTION */}
        <div style={{...styles.card, gridColumn: '1 / -1'}}>
          <h1 style={styles.h1}>Hello, I'm [Client Name]</h1>
          <p style={styles.sub}>Full Stack Developer • 2 Years Experience</p>
          <a href="mailto:email@example.com" style={styles.btn}>Hire Me</a>
        </div>

        {/* SKILLS */}
        <div style={styles.card}>
          <h2 style={{marginBottom: '20px'}}>Tech Stack</h2>
          <div>
            {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker'].map(skill => (
              <span key={skill} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* GITHUB LINK */}
        <div style={{...styles.card, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0d1117'}}>
           <h3 style={{margin:0}}>GitHub Profile ↗</h3>
        </div>

        {/* PROJECTS */}
        <div style={{...styles.card, gridColumn: '1 / -1', backgroundColor: '#eee', color: '#111'}}>
          <h3 style={styles.projectTitle}>Featured Project: E-Commerce Store</h3>
          <p>A full-stack shopping platform with Stripe payments and authentication.</p>
          <div style={{marginTop: '15px'}}>
             <span style={{...styles.tag, backgroundColor: '#ddd', color: '#000'}}>Next.js</span>
             <span style={{...styles.tag, backgroundColor: '#ddd', color: '#000'}}>Stripe</span>
          </div>
        </div>

      </main>
    </div>
  )
}
