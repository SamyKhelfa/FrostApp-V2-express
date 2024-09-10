import express from 'express';
import authRoutes from './auth.route';

const appRouter = express.Router();

appRouter.use("/auth", authRoutes);


export default appRouter;