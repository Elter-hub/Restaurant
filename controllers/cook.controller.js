const { cookService } = require('../services');
const cookValidator = require('../validators/newCookValidator');

module.exports = {
    addNewCook: async (req, res) => {
        try {
            const isNewCookValid = cookValidator.validate(req.body);
            if (isNewCookValid.error) {
                throw new Error(isNewCookValid.error.message);
            }
            const cook = await cookService.addNewCook(req.body);

            res.json({ cook });
        } catch (e) {
            res.json(e.message);
        }
    },
    selectAllCooks: async (req, res) => {
        try {
            const allCooks = await cookService.selectAllCooks();
            res.json(allCooks);
        } catch (e) {
            res.json(e);
        }
    }
};
