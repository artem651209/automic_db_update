import sequelize from '../config/database.js';
import User from '../models/user.js';
import { Op } from 'sequelize';

export const updateBalance = async (req, res) => {
    const { userId, amount } = req.body;

    if (!userId || !Number.isFinite(amount)) {
        return res.status(400).json({ error: 'Некорректные параметры' });
    }

    try {
        let updatedRows = 0;

        if (amount < 0) {
            [updatedRows] = await User.update(
                { balance: sequelize.literal(`balance + ${amount}`) },
                { where: { id: userId, balance: { [Op.gte]: Math.abs(amount) } } }
            );
        } else {
            [updatedRows] = await User.update(
                { balance: sequelize.literal(`balance + ${amount}`) },
                { where: { id: userId } }
            );
        }
        if (updatedRows === 0) {
            return res.status(400).json({error: 'Недостаточно средств' });
        }

        return res.status(200).json({ success: true, message: 'Баланс обновлён' });

    } catch (error) {
        console.error('Ошибка обновления баланса:', error);
        return res.status(500).json({ error: 'Ошибка сервера' });
    }
};

