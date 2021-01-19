const { showMenu, addNewMeal } = require('../services/meal.service')
const {constants: {CREATED}} = require('../constants')

module.exports = {
    addNewMeal: async (req, res) => {
        try {
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