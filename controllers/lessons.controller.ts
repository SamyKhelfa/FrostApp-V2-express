import { type Request, type Response } from "express";
import { prisma } from '../config/db';

export const findAll = async (_req: Request, res: Response) => {
    try {
        const lessons = await prisma.lesson.findMany()

        res.status(200).send(lessons)
    } catch (err: any) {
        console.error(err);
        res.status(500).send(err)
    }
}

// Ce qui bloque : ??

// Pour la prochaine fois => Finir le CRUD en entier https://www.prisma.io/docs/orm/prisma-client/queries/crud