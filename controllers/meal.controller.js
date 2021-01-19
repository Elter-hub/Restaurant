const { showMenu, addNewMeal } = require('../services/meal.service')
const {constants: {CREATED}} = require('../constants')
const mealValidator = require('../validators/newMealValidator')

module.exports = {
    addNewMeal: async (req, res) => {
        try {
            const isMealValid = mealValidator.validate(req.body)

            if (isMealValid.error) {
               throw new Error(isMealValid.error.message)
            }
            const cook = await addNewMeal(req.body)

            res.status(CREATED).json({cook})
        } catch (e){
            res.json(e.message)
        }
    },
    selectAllMeals: async (req, res) => {
        try {
            const allCooks = await showMenu();

            res.json(allCooks)
        } catch (e) {
            res.json(e);
        }
    }
}