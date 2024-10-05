import express from 'express'
import { addEmployee, deleteEmployee, getAllEmployee, getEmployeeById, updateEmployee } from '../controllers/employee.controller.js'

const EmployeeRoute = express.Router()

EmployeeRoute.post('/add', addEmployee)
EmployeeRoute.get('/get/all', getAllEmployee)
EmployeeRoute.get('/get/:id', getEmployeeById)
EmployeeRoute.put('/update/:id', updateEmployee)
EmployeeRoute.delete('/delete/:id', deleteEmployee)

export default EmployeeRoute