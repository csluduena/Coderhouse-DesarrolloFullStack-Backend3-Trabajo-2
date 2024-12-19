import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);

// Ruta para manejar errores de rutas inexistentes
app.use((req, res) => {
    res.status(404).json({ status: 'error', error: 'Route not found' });
});

export const startServer = (port) => {
    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}/`);
            resolve(server);
        });
    });
};

export default app;
