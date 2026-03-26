import { Request, Response } from 'express'
import Blog from '../models/blog.model'

// GET /api/blog  (only published posts)
export const getBlogs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find({ published: true })
      .select('-content') // exclude full content from list view
      .sort({ publishedAt: -1 })
    res.status(200).json({ success: true, data: blogs })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}

// GET /api/blog/:slug
export const getBlogBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true })
    if (!blog) {
      res.status(404).json({ success: false, message: 'Post not found.' })
      return
    }
    res.status(200).json({ success: true, data: blog })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}

// POST /api/blog  (create a new post)
export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.create(req.body)
    res.status(201).json({ success: true, data: blog })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}
