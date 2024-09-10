import { type Request, type Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from '../config/db';

export const login =  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1h' }
    );

    res.json({ token });
}

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });
   
    res.status(201).json({ user: newUser });
}
