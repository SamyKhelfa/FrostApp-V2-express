import express, { type Request, type Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/user', async (req: Request, res: Response) => {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
});

export { router };

