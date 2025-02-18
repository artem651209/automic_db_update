import express from 'express';
import balanceRoutes from './routes/balanceRoutes.js';
import sequelize from './config/database.js';
import {createUser} from './scripts/createUser.js';
import { runMigrations } from './migrations/migrationRunner.js';

const app = express();
app.use(express.json());
app.use('/api', balanceRoutes);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение к БД установлено');
        await runMigrations();
        await createUser();
        app.listen(3000, () => {
            console.log('Сервер запущен на http://localhost:3000');
        });
    } catch (error) {
        console.error('Ошибка подключения к БД:', error);
    }
};

startServer();
