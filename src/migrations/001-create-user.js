export const up = async ({ context: queryInterface }) => {
    await queryInterface.createTable('users', {
        id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
        balance: { type: 'INTEGER', allowNull: false}
    });
};

export const down = async ({ context: queryInterface }) => {
    await queryInterface.dropTable('users');
};
