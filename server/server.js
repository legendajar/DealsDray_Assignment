import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './db/db.config.js'
import AdminRoute from './routes/login.route.js'
import EmployeeRoute from './routes/employee.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT;

// Database Connection
connectDB()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const allowedOrigins = ['http://localhost:5173']
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    },
    credentials: true
};
app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the server!!'
    })
})
app.use('/api/admin', AdminRoute)
app.use('/api/employee', EmployeeRoute)

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})