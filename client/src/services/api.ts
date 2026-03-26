import axios from 'axios'
import type { Project, Blog, ContactForm, ApiResponse } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api`
    : '/api',
  headers: { 'Content-Type': 'application/json' },
})

export const projectsApi = {
  getAll: () => api.get<ApiResponse<Project[]>>('/projects'),
  getById: (id: string) => api.get<ApiResponse<Project>>(`/projects/${id}`),
}

export const blogApi = {
  getAll: () => api.get<ApiResponse<Blog[]>>('/blog'),
  getBySlug: (slug: string) => api.get<ApiResponse<Blog>>(`/blog/${slug}`),
}

export const contactApi = {
  submit: (form: ContactForm) =>
    api.post<ApiResponse<null>>('/contact', form),
}
