import Head from 'next/head'

export default function Portfolio() {
  const styles = {
    container: { fontFamily: 'sans-serif', backgroundColor: '#0a0a0a', color: '#ededed', minHeight: '100vh', padding: '24px' },
    main: { maxWidth: '900px', margin: '0 auto' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' },
    logo: { fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '-0.5px' },
    hero: { marginBottom: '80px' },
    h1: { fontSize: '3.5rem', lineHeight: '1.1', margin: '0 0 20px 0', background: 'linear-gradient(to right, #fff, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    bio: { fontSize: '1.2rem', color: '#888', maxWidth: '600px', lineHeight: '1.6' },
    sectionTitle: { fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', marginBottom: '30px', marginTop: '80px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
    card: { backgroundColor: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222', transition: 'transform 0.2s', textDecoration: 'none', color: 'inherit', display: 'block' },
    projectTitle: { fontSize: '1.4rem', margin: '0 0 10px 0' },
    projectDesc: { color: '#888', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px' },
    tagContainer: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    tag: { fontSize: '0.75rem', backgroundColor: '#222', padding: '6px 12px', borderRadius: '100px', color: '#ccc' },
    contact: { textAlign: 'center', marginTop: '100px', paddingBottom: '40px' },
    button: { display: 'inline-block', backgroundColor: '#fff', color: '#000', padding: '16px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }
  }

  return (
    <div style={styles.container}>
      <Head>
        <title>Alex Dev | Full Stack Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
      </Head>

      <main style={styles.main}>
        {/* NAV */}
        <nav style={styles.nav}>
          <div style={styles.logo}>ALEX.DEV</div>
          <a href="mailto:hello@example.com" style={{color: '#888', textDecoration: 'none'}}>Contact</a>
        </nav>

        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.h1}>Building digital products with code &amp; passion.</h1>
          <p style={styles.bio}>
            I am a Full Stack Developer with 2 years of experience building scalable web applications. 
            I specialize in the React ecosystem (Next.js) and Node.js backends. 
            Currently focused on performance optimization and clean UI.
          </p>
        </section>

        {/* TECH STACK */}
        <section>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.tagContainer}>
            {['Javascript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Git/GitHub', 'Docker'].map(skill => (
              <span key={skill} style={{...styles.tag, backgroundColor: '#1a1a1a', border: '1px solid #333'}}>{skill}</span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 style={styles.sectionTitle}>Featured Work</h2>
          <div style={styles.grid}>
            
            {/* Project 1 */}
            <a href="#" style={styles.card}>
              <h3 style={styles.projectTitle}>Inventory SaaS Dashboard</h3>
              <p style={styles.projectDesc}>
                A real-time inventory management system for small businesses. Features include stock tracking, automated alerts, and data visualization.
              </p>
              <div style={styles.tagContainer}>
                <span style={styles.tag}>Next.js</span>
                <span style={styles.tag}>Supabase</span>
                <span style={styles.tag}>Recharts</span>
              </div>
            </a>

            {/* Project 2 */}
            <a href="#" style={styles.card}>
              <h3 style={styles.projectTitle}>E-Commerce API</h3>
              <p style={styles.projectDesc}>
                A robust backend API handling 1000+ daily requests. Integrated with Stripe for payments and SendGrid for transactional emails.
              </p>
              <div style={styles.tagContainer}>
                <span style={styles.tag}>Node.js</span>
                <span style={styles.tag}>Express</span>
                <span style={styles.tag}>PostgreSQL</span>
              </div>
            </a>

            {/* Project 3 */}
            <a href="#" style={styles.card}>
              <h3 style={styles.projectTitle}>Crypto Tracker</h3>
              <p style={styles.projectDesc}>
                Mobile-first application tracking live crypto prices using public APIs. Optimized for high performance and low latency.
              </p>
              <div style={styles.tagContainer}>
                <span style={styles.tag}>React Native</span>
                <span style={styles.tag}>Redux</span>
              </div>
            </a>

          </div>
        </section>

        {/* CONTACT */}
        <section style={styles.contact}>
          <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Ready to work together?</h2>
          <p style={{color: '#666', marginBottom: '40px'}}>I am currently open to new freelance opportunities.</p>
          <a href="mailto:email@example.com" style={styles.button}>Get in Touch</a>
        </section>

      </main>
    </div>
  )
}
