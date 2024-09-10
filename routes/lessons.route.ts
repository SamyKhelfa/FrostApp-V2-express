import { findAll } from 'controllers/lessons.controller';
import express from 'express';

const router = express.Router();

router.get('/lessons', findAll);

export { router };