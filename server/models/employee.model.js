import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true },
    gender: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true })

const employeeModel = mongoose.model("Employee", employeeSchema);

export default employeeModel