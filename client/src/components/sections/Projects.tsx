import { useState, useEffect } from 'react'
import { useProjects } from '../../hooks/useProjects'
import type { Project } from '../../types'

export default function Projects() {
  const { projects, loading, error } = useProjects()
  
  // Debug logging
  useEffect(() => {
    console.log('=== Projects Component Debug ===')
    console.log('Loading state:', loading)
    console.log('Error state:', error)
    console.log('Projects array:', projects)
    console.log('Projects count:', projects?.length)
    if (projects && projects.length > 0) {
      console.log('First project:', projects[0])
    }
  }, [projects, loading, error])

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-tag">03 — Projects</div>
          <h2 className="section-title">What I've Built</h2>
          <div className="section-line" />
        </div>

        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}

        {!loading && !error && (
          <>
            {!projects || projects.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--surface)'
              }}>
                <p style={{ marginBottom: '1rem' }}>📁 No projects found in the database</p>
                <p style={{ fontSize: 12, color: 'var(--muted2)' }}>
                  Check your MongoDB connection or add projects to the database
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {projects.map((project, i) => (
                  project.status === 'coming-soon'
                    ? <ComingSoonCard key={project._id} num={i + 1} />
                    : <ProjectCard key={project._id} project={project} num={i + 1} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, num }: { project: Project; num: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        overflow: 'hidden', transition: 'all 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Header */}
      <div style={{ padding: '1.5rem 1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          fontSize: 56, fontFamily: 'Syne, sans-serif', fontWeight: 800,
          color: 'var(--border2)', lineHeight: 1, letterSpacing: '-0.04em',
        }}>
          {String(num).padStart(2, '0')}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.liveUrl && (
            <LinkBadge href={project.liveUrl} label="Live ↗" />
          )}
          {project.githubUrl && (
            <LinkBadge href={project.githubUrl} label="GitHub" />
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
        <h3 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '1.4rem',
          fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem',
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.techStack && project.techStack.map(t => (
            <span key={t} style={{
              fontSize: 10, color: 'var(--cyan)',
              border: '1px solid rgba(0,212,255,0.2)',
              padding: '3px 10px', letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              {t}
            </span>
          ))}
        </div>
        {project.status === 'live' && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--green)', marginTop: '1rem',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: 'var(--green)',
              animation: 'pulse 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            Live in production
          </div>
        )}
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }`}</style>
    </div>
  )
}

function ComingSoonCard({ num }: { num: number }) {
  return (
    <div style={{
      background: 'transparent',
      border: '1px dashed var(--border2)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      minHeight: 280, padding: '2rem', textAlign: 'center',
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '1rem' }}>
        — Currently building —
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--muted)' }}>
        Project {String(num).padStart(2, '0')}
      </div>
      <p style={{ fontSize: 12, color: 'var(--muted2)', marginTop: '0.5rem' }}>
        Something new is shipping soon.
      </p>
      <div style={{ fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.1em', marginTop: '1.25rem' }}>
        <span style={{ color: 'var(--green)' }}>▮</span> In progress...
      </div>
    </div>
  )
}

function LinkBadge({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 11, color: hovered ? 'var(--green)' : 'var(--muted)',
        textDecoration: 'none',
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        padding: '5px 12px', letterSpacing: '0.08em',
        textTransform: 'uppercase', transition: 'all 0.2s',
      }}
    >
      {label}
    </a>
  )
}

function LoadingState() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
      {[0, 1].map(i => (
        <div key={i} style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          height: 280, animation: 'shimmer 1.5s ease-in-out infinite',
        }} />
      ))}
      <style>{`@keyframes shimmer { 0%,100%{opacity:.4} 50%{opacity:.7} }`}</style>
    </div>
  )
}

function ErrorState({ message }: { message: string }) {
  return (
    <div style={{
      border: '1px solid var(--border)', padding: '2rem',
      textAlign: 'center', color: 'var(--muted)', fontSize: 13,
    }}>
      <span style={{ color: '#ff5555' }}>⚠ </span>{message}
    </div>
  )
}