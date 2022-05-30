import { Router } from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser, getUserActivity, verifyUser } from '../controllers/users.controllers.js'
const router = Router()

router.get('/', getUsers)

router.post('/', createUser)

router.post('/verify', verifyUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.get('/:id', getUser)

router.get('/:id/activity', getUserActivity)



export default router