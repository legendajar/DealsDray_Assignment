import employeeModel from "../models/employee.model.js"

// Add Employee
export const addEmployee = async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, image } = req.body
        const requiredFields = { name, email, mobile, designation, gender, image }
        for ( const [field, value] of Object.entries(requiredFields)) {
            if (!value) {
                return res.status(400).json({
                    success: false,
                    message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
                })
            }
        }

        const isExists = await employeeModel.findOne({email: email})
        if(isExists) {
            return res.status(400).json({
                success: false,
                message: 'Employee already exists'
            })
        }

        const employee = await employeeModel.create({
            name: name,
            email: email,
            mobile: mobile,
            designation: designation,
            gender: gender,
            image: image
        })

        return res.status(200).json({
            success: true,
            message: 'Employee added successfully',
            data: employee
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const getAllEmployee = async (req, res) => {
    try {
        const employees = await employeeModel.find()
        return res.status(200).json({
            success: true,
            data: employees
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is required'
            })
        }

        const employee = await employeeModel.findById(id)
        if (!employee) {
            return res.status(400).json({
                success: false,
                message: 'Employee not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: employee
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
} 

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, mobile, designation, gender, image } = req.body
        const requiredFields = { name, email, mobile, designation, gender, image }
        for ( const [field, value] of Object.entries(requiredFields)) {
            if (!value) {
                return res.status(400).json({
                    success: false,
                    message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
                })
            }
        }

        const updatedData = {
            name: name,
            email: email,
            mobile: mobile,
            designation: designation,
            gender: gender,
            image: image
        }

        await employeeModel.findByIdAndUpdate(id, updatedData, { new: true });
        return res.status(200).json({
            success: true,
            message: 'Employee updated successfully'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is required'
            })
        }

        const isExists = await employeeModel.findById(id)
        if (!isExists) {
            return res.status(400).json({
                success: false,
                message: 'Employee not found'
            })
        }

        await employeeModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: 'Employee deleted successfully'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}