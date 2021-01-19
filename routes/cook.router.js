const router = require('express').Router();
const {addNewCook, selectAllCooks} = require('../controllers/cook.controller')

/**
 * @swagger
 * /cook:
 *   get:
 *     description: Get all cooks
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/', selectAllCooks);
/**
 * @swagger
 * /cook:
 *   post:
 *     description: Add new cook
 *     parameters:
 *      - name: name
 *        description: cook's name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: lastName
 *        description: cook's last name
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', addNewCook);

module.exports = router;