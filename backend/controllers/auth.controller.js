import bcryptjs from "bcryptjs";

import { User } from "../models/user.model.js";

import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if(!email || !password || !name) {
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) return res.status(400).json({success: false, message: "User already exists"});

        const hashedPassword = await bcryptjs.hash(password, 10);

        const verificationToken = generateVerificationToken();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours
        })

        await user.save();

        //jwt
        generateTokenAndSetCookie(res, user._id);

        //verification email
        sendVerificationEmail(user.email, verificationToken);


        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined //setting smth undefined will make it invisible in the data
            }
        })
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

export const login = async (req, res) => {

}

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out successfully"});
}

export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });

        if(!user) return res.status(400).json({success: false, message: "Invalid or expired verification code"})
        
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();

        await sendWelcomeEmail(user.email, user.name); //structure made in mailtrap templates

        res.status(200).json({success: true, message: "Email verified successfully", user: {
            ...user._doc,
            password: undefined,
        }})
    } catch (error) {
        res.status(500).json({success: false, message: "Error occured when verifiying the email"})
    }
}