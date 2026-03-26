export interface Project {
  _id: string
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'live' | 'in-progress' | 'coming-soon'
  order: number
  featured: boolean
  createdAt: string
}

export interface Blog {
  _id: string
  title: string
  excerpt: string
  slug: string
  tags: string[]
  published: boolean
  publishedAt?: string
  createdAt: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
}
