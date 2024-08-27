import express from 'express';
import { router as registerRouter } from './routes/register';
import { router as loginRouter } from './routes/login';
import { router as userRouter } from './routes/user';

const app = express();
const port = 3000;

app.use(express.json());  // Pour parser le JSON dans le corps des requêtes

app.use('/auth', registerRouter);
app.use('/auth', loginRouter);
app.use('/user', userRouter);


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
