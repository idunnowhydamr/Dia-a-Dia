import express from 'express'
import { Login, Register, getActives, getObjetives, addActive, deleteActive, addEvent, deleteEvent} from '../controllers/userController.js'
const router = express.Router()

router.post('/login',Login)
router.post('/register', Register)

router.post('/active', addActive)
router.get('/active/:userId', getActives)
router.get('/objetive/:userId', getObjetives)
router.delete('/active/:idActivo', deleteActive)

router.post('/event', addEvent)
router.delete('/event/:idEvento', deleteEvent)

export default router