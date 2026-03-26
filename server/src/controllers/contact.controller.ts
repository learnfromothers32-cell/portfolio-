import { Request, Response } from 'express'
import Contact from '../models/contact.model'

// POST /api/contact
export const submitContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body

    // Basic validation
    if (!name || !email || !subject || !message) {
      res.status(400).json({ success: false, message: 'All fields are required.' })
      return
    }

    const contact = await Contact.create({ name, email, subject, message })

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon. 🚀',
      data: { id: contact._id },
    })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ success: false, message: 'Server error. Please try again.' })
  }
}

// GET /api/contact  (your private dashboard — check messages)
export const getContacts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.status(200).json({ success: true, data: contacts })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' })
  }
}
