import express from 'express';
import type { Application } from 'express';
import router from './router';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors('*'))
app.use(router);

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
        message: `Route ${req.originalUrl} not found`
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})


