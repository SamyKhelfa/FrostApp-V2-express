import express from 'express';
import appRouter from './routes'
import cors from "cors";

import './config/db'

const app = express();
const port = 5050;

app.use(express.json());  // Pour parser le JSON dans le corps des requêtes
app.use(cors({ 
    origin: '*'
 }))

app.use('/', appRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
