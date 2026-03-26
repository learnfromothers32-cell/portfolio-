import { useEffect, useRef, useState } from 'react'

const skills = [
  { icon: '⚛',  name: 'React',       level: 'Frontend Framework', pct: 85, tags: 'Hooks · Context · Vite'         },
  { icon: '🟢', name: 'Node.js',      level: 'Runtime',            pct: 80, tags: 'Express · REST · Async'         },
  { icon: '🍃', name: 'MongoDB',      level: 'Database',           pct: 75, tags: 'Mongoose · Atlas · Queries'     },
  { icon: '🔷', name: 'TypeScript',   level: 'Language',           pct: 70, tags: 'Strict · Generics · Types'      },
  { icon: '🐋', name: 'Docker',       level: 'Containerization',   pct: 65, tags: 'Compose · Images · Volumes'     },
  { icon: '⚡', name: 'Express',      level: 'Backend Framework',  pct: 82, tags: 'Middleware · Auth · CORS'       },
  { icon: '🐙', name: 'Git / GitHub', level: 'Version Control',    pct: 78, tags: 'Branches · PRs · Actions'       },
  { icon: '🔌', name: 'REST APIs',    level: 'Architecture',       pct: 85, tags: 'CRUD · Auth · JSON'             },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-tag">02 — Skills</div>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} animate={visible} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  skill, animate, delay,
}: {
  skill: typeof skills[0]; animate: boolean; delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        padding: '1.5rem', cursor: 'default',
        transition: 'all 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--green)',
        transform: `scaleX(${hovered ? 1 : 0})`,
        transformOrigin: 'left',
        transition: 'transform 0.25s',
      }} />

      <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{skill.icon}</div>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
        {skill.name}
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: '0.75rem' }}>
        {skill.level}
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: 'var(--border)', borderRadius: 2 }}>
        <div style={{
          height: '100%', background: 'var(--green)', borderRadius: 2,
          width: animate ? `${skill.pct}%` : '0%',
          transition: `width 1s ease ${delay}ms`,
        }} />
      </div>

      <div style={{ fontSize: 10, color: 'var(--green2)', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
        {skill.tags}
      </div>
    </div>
  )
}
