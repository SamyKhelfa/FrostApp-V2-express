const express = require('express');
const app = express();
const port = 3000;
import './routes/index';
import './routes/register';
import './routes/login';
import './routes/user';


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


