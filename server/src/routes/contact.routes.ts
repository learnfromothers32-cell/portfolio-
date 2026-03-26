import { Router } from 'express'
import { submitContact, getContacts } from '../controllers/contact.controller'

const router = Router()

router.post('/', submitContact)   // Public — form submission
router.get('/',  getContacts)     // Private — view messages (add auth middleware later)

export default router
