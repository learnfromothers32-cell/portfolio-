import { useState, useEffect } from 'react'
import { projectsApi } from '../services/api'
import type { Project } from '../types'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    projectsApi.getAll()
      .then(res => setProjects(res.data.data || []))
      .catch(() => setError('Failed to load projects.'))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
