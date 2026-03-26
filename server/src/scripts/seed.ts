import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Project from '../models/project.model'
import Blog from '../models/blog.model'

dotenv.config()

const seedProjects = [
  {
    title: 'Own Shop',
    description:
      'A full-stack eCommerce application with product listings, cart management, and checkout flow. Built to simulate a real-world shopping experience with a clean, responsive UI.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    liveUrl: 'https://my-shop-1.vercel.app/',
    githubUrl: 'https://github.com/learnfromothers32-cell/Own-Shop',
    status: 'live',
    order: 1,
    featured: true,
  },
  {
    title: 'Project Two',
    description: 'Something new is shipping soon. Stay tuned.',
    techStack: ['React', 'Node.js', 'TypeScript', 'Docker'],
    status: 'in-progress',
    order: 2,
    featured: false,
  },
]

const seedBlogs = [
  {
    title: 'How I Built and Dockerized My MERN Portfolio From Scratch',
    excerpt:
      'A step-by-step breakdown of building a full-stack portfolio — from project structure to Docker Compose to deployment.',
    content: 'Coming soon...',
    slug: 'how-i-built-and-dockerized-my-mern-portfolio',
    tags: ['Docker', 'MERN', 'DevOps', 'Portfolio'],
    published: false,
  },
  {
    title: 'Docker Compose for Full Stack Developers',
    excerpt:
      'Everything I wish I knew before containerizing a MERN stack app — networking, volumes, environment variables, and gotchas.',
    content: 'Coming soon...',
    slug: 'docker-compose-for-full-stack-developers',
    tags: ['Docker', 'DevOps', 'Node.js'],
    published: false,
  },
  {
    title: 'CI/CD From Zero: Automating Deployments With GitHub Actions',
    excerpt:
      'My first GitHub Actions pipeline — building a Docker image, pushing to DockerHub, and triggering a live redeploy automatically.',
    content: 'Coming soon...',
    slug: 'cicd-from-zero-github-actions',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps'],
    published: false,
  },
]

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
    console.log('✅ Connected to MongoDB')

    await Project.deleteMany({})
    await Blog.deleteMany({})
    console.log('🗑️  Cleared existing data')

    await Project.insertMany(seedProjects)
    console.log('✅ Projects seeded')

    await Blog.insertMany(seedBlogs)
    console.log('✅ Blog posts seeded')

    console.log('🚀 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seed()
