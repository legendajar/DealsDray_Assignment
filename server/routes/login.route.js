import express from 'express'
import { adminRegister, adminLogin, adminLogout } from '../controllers/login.controller.js'


const AdminRoute = express.Router()

AdminRoute.post('/register', adminRegister)
AdminRoute.post('/login', adminLogin)
AdminRoute.post('/logout', adminLogout)

export default AdminRoute