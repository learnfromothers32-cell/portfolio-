import mongoose, { Document, Schema } from 'mongoose'

export interface IBlog extends Document {
  title: string
  excerpt: string
  content: string
  slug: string
  tags: string[]
  published: boolean
  publishedAt?: Date
  createdAt: Date
}

const BlogSchema = new Schema<IBlog>(
  {
    title:       { type: String, required: true, trim: true },
    excerpt:     { type: String, required: true, trim: true, maxlength: 300 },
    content:     { type: String, required: true },
    slug:        { type: String, required: true, unique: true, lowercase: true, trim: true },
    tags:        [{ type: String, trim: true }],
    published:   { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
)

// Auto-set publishedAt when post is published
BlogSchema.pre('save', function (next) {
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date()
  }
  next()
})

export default mongoose.model<IBlog>('Blog', BlogSchema)
