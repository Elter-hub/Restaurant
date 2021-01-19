const router = require('express').Router();
const { addNewMeal, selectAllMeals } = require('../controllers/meal.controller');

/**
 * @swagger
 * /menu:
 *   get:
 *     description: Get menu of all meals
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/', selectAllMeals);
/**
 * @swagger
 * /menu:
 *   post:
 *     description: Add new meal
 *     parameters:
 *      - name: cook_id
 *        description: Who can make this meal?
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: label
 *        description: label of  new meal
 *        in: formData
 *        required: true
 *        type: string
 *      - name: price
 *        description: How much it should cost
 *        in: formData
 *        required: true
 *        type: string
 *      - name: ingredients
 *        description: What u need to make this meal....
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', addNewMeal);

module.exports = router;
