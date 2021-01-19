module.exports = (client, DataTypes) => {
    const Cook = client.define(
        'Cook',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'cooks',
            timestamps: false
        }
    );

    const Meal = require('./Meal')(client, DataTypes);

    Cook.hasMany(Meal, {
        foreignKey: 'cook_id',
        onDelete: 'cascade'
    });

    return Cook;
};