import express from 'express';
import type { Application } from 'express';
import router from './router';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})



