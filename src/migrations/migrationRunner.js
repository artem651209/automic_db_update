import { Umzug, SequelizeStorage } from 'umzug';
import sequelize from '../config/database.js';

const umzug = new Umzug({
    migrations: { glob: 'src/migrations/!(*migrationRunner).js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

export const runMigrations = async (action) => {
    await sequelize.query('DROP TABLE IF EXISTS users;'); 

    if (action === 'down') {
        await umzug.down();
        console.log('Откат миграции выполнен!');
    } else {
        await umzug.up();
        console.log('Миграция успешно применена!');
    }
};
