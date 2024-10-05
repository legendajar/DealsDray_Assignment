import loginModel from "../models/login.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const adminRegister = async(req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;
        if (!username) {
            return res.status(400).json({
                success: false,
                message: 'Username is required'
            })
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Password is required'
            })
        }

        if(!confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Confirm Password is required'
            })
        }

        if(password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            })
        }

        const isExists = await loginModel.findOne({ email: email });
        if (isExists) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new loginModel({
            username: username,
            password: hashedPassword
        })
        
        await newAdmin.save()
        return res.status(201).json({
            success: true,
            message: 'Login Created Successfully',
            data: newAdmin
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    } 
}

export const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.status(400).json({
                success: false,
                message: 'Username is required'
            })
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Password is required'
            })
        }

        const admin = await loginModel.findOne({ username: username });
        if (!admin) {
            return res.status(400).json({
                success: false, 
                message: 'User not found'
            })
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect Password'
            })
        }

        const token = jwt.sign({ _id: admin._id}, process.env.TOKEN_SECRET_KEY, { expiresIn: "1d"});

        return res.status(200).cookie("token", token, {
            maxAge: 1*24*60*60*1000,
            httpOnly: true,
            sameSite: 'strict'
        }).json({
            success: true,
            message: 'Login Successful',
            data: {
                username: admin.username
            },
            token: token
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const adminLogout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "" , {
            maxAge: 0,
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            secure: process.env.NODE_ENV === "production" || true
        }).json({
            success: true,
            message: 'Logout Successful'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}