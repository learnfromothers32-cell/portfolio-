import { useState, useEffect } from 'react'
import { blogApi } from '../../services/api'
import type { Blog } from '../../types'

// Placeholder posts shown while blog is empty (published: false in DB)
const placeholderPosts = [
  {
    _id: 'p1', slug: '#', tags: ['Docker', 'MERN', 'DevOps'],
    title: 'How I Built and Dockerized My MERN Portfolio From Scratch',
    excerpt: 'A step-by-step breakdown of building a full-stack portfolio — from project structure to Docker Compose to deployment.',
    publishedAt: undefined, published: false, createdAt: '',
  },
  {
    _id: 'p2', slug: '#', tags: ['Docker', 'DevOps'],
    title: 'Docker Compose for Full Stack Developers',
    excerpt: 'Everything I wish I knew before containerizing a MERN app — networking, volumes, environment variables, and gotchas.',
    publishedAt: undefined, published: false, createdAt: '',
  },
  {
    _id: 'p3', slug: '#', tags: ['CI/CD', 'GitHub Actions'],
    title: 'CI/CD From Zero: Automating Deployments With GitHub Actions',
    excerpt: 'My first GitHub Actions pipeline — building a Docker image, pushing to DockerHub, and triggering a live redeploy.',
    publishedAt: undefined, published: false, createdAt: '',
  },
]

export default function Blog() {
  const [posts, setPosts]   = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    blogApi.getAll()
      .then(res => setPosts(res.data.data || []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  const displayPosts = posts.length > 0 ? posts : placeholderPosts

  return (
    <section id="blog" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-tag">04 — Blog</div>
          <h2 className="section-title">Writing</h2>
          <div className="section-line" />
        </div>

        {loading ? (
          <BlogSkeleton />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {displayPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: Blog }) {
  const [hovered, setHovered] = useState(false)

  const dateLabel = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Coming Soon'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        padding: '1.5rem', cursor: 'pointer',
        transition: 'all 0.25s',
        background: hovered ? 'var(--bg3)' : 'var(--surface)',
      }}
    >
      <div style={{ fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
        {dateLabel}
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
        {post.title}
      </h3>
      <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
        {post.excerpt}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
        {post.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 10, color: 'var(--muted2)',
            border: '1px solid var(--border)', padding: '2px 8px',
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{
        fontSize: 11, color: 'var(--green)',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 4,
      }}>
        Read more
        <span style={{
          transition: 'transform 0.2s',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          display: 'inline-block',
        }}>→</span>
      </div>
    </div>
  )
}

function BlogSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          height: 200, animation: 'shimmer 1.5s ease-in-out infinite',
        }} />
      ))}
      <style>{`@keyframes shimmer { 0%,100%{opacity:.4} 50%{opacity:.7} }`}</style>
    </div>
  )
}
