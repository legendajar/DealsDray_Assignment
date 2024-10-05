import express from 'express'


const AdminRoute = express.Router()

AdminRoute.post('/admin/register', adminRegister)
AdminRoute.post('/admin/login', adminLogin)

export default AdminRoute