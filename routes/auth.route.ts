import express from 'express'
import { login, register } from '../controllers/auth.controller';

const authRoutes = express.Router();

authRoutes
    .post("/login", login)
    .post('/register', register);

export default authRoutes;