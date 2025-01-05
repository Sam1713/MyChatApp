import express from 'express'
import { registerUser } from '../controller/UserController.js'
const router=express.Router()

router.post('/signupUser',registerUser)
export default router