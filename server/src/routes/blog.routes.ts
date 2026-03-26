import { Router } from 'express'
import { getBlogs, getBlogBySlug, createBlog } from '../controllers/blog.controller'

const router = Router()

router.get('/',          getBlogs)        // GET all published posts
router.get('/:slug',     getBlogBySlug)   // GET post by slug
router.post('/',         createBlog)      // POST create post

export default router
