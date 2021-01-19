module.exports = (client, DataTypes) => {
    const Meal = client.define(
        'Meal',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cook_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            label: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ingredients: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'meals',
            timestamps: false
        }
    );

    return Meal;
};