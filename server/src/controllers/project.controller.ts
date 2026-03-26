import { Request, Response } from 'express'
import Project from '../models/project.model'

// GET /api/projects
export const getProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find().sort({ order: 1 })
    res.status(200).json({ success: true, data: projects })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}

// GET /api/projects/:id
export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found.' })
      return
    }
    res.status(200).json({ success: true, data: project })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}

// POST /api/projects  (seed your projects from here)
export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, data: project })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}
