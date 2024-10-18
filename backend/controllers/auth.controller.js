import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body || {};
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: "User has successfully created"});
        
    } catch(error) {
        next(error);
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;
    return res.json({ success: true });
};
