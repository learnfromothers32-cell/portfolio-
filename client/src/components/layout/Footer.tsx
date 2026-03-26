export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
      fontSize: 11,
      color: 'var(--muted2)',
      letterSpacing: '0.05em',
      position: 'relative',
      zIndex: 1,
    }}>
      <p>
        Built with <span style={{ color: 'var(--green)' }}>♥</span> by{' '}
        <span style={{ color: 'var(--text)' }}>Asante Kelvin</span> · Accra, Ghana · 2025
      </p>
      <p style={{ marginTop: '0.5rem', color: 'var(--muted2)' }}>
        React · Node.js · MongoDB · Docker
      </p>
    </footer>
  )
}
