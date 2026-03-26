import mongoose, { Document, Schema } from 'mongoose'

export interface IProject extends Document {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'live' | 'in-progress' | 'coming-soon'
  order: number
  featured: boolean
  createdAt: Date
}

const ProjectSchema = new Schema<IProject>(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    techStack:   [{ type: String, trim: true }],
    liveUrl:     { type: String, trim: true },
    githubUrl:   { type: String, trim: true },
    status:      { type: String, enum: ['live', 'in-progress', 'coming-soon'], default: 'coming-soon' },
    order:       { type: Number, default: 0 },
    featured:    { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model<IProject>('Project', ProjectSchema)
