import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()


const app = express()
const PORT = process.env.PORT;

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

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})