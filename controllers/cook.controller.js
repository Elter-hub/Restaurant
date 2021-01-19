const {cookService} = require('../services')

module.exports = {
    addNewCook: async (req, res) => {
        try {
            const cook = await  cookService.addNewCook(req.body)
            res.json({cook})
        } catch (e){
            res.json(e.message)
        }
    },
    selectAllCooks: async (req, res) => {
        try {
            const allCooks = await cookService.selectAllCooks();
            res.json(allCooks)
        } catch (e) {
            res.json(e);
        }
    }
}