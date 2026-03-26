import { Router } from 'express'
import { getProjects, getProjectById, createProject } from '../controllers/project.controller'

const router = Router()

router.get('/',     getProjects)       // GET all projects
router.get('/:id',  getProjectById)    // GET single project
router.post('/',    createProject)     // POST create project

export default router
