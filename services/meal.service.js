const db = require('../dataBase').getInstance();

module.exports = {
    addNewMeal: (meal) => {
        const MealModel = db.getModel('Meal');

        return MealModel.create(meal);
    },

    showMenu: async () => {
        const MealModel = db.getModel('Meal');
        const allMeals = await MealModel.findAll({attributes: ['label', 'price', 'ingredients']});

        return allMeals;
    }
}