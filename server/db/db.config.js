import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    const { DB_URL } = process.env
    if (!DB_URL){
        throw new Error('DB_URL is not defined')
    }
    try {
        await mongoose.connect(DB_URL)
        console.log('Databse connected successfully')
    } catch(err) {
        console.log(err)
        throw new Error('DB Connection Error')
    }
} 