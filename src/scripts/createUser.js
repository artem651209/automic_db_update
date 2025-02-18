import User from '../models/user.js';
import sequelize from '../config/database.js';

export const createUser = async () => {
    try {
        await sequelize.sync();

        const newUser = await User.create({ balance: 10000 });
        console.log(`Пользователь создан: ID ${newUser.id}, Баланс: ${newUser.balance}`); 
    } catch (error) {
        console.error('Ошибка при создании пользователя:', error);
        process.exit(1);
    }
};
