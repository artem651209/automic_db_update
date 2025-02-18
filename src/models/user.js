import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 10000 }
}, { timestamps: false });

export default User;
