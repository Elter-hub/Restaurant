const db = require('../dataBase').getInstance();

module.exports = {
    addNewCook: (cook) => {
        const CookModel = db.getModel('Cook');

        return CookModel.create(cook);
    },

    selectAllCooks: () => {
        const CookModel = db.getModel('Cook');

        return CookModel.findAll();
    }
};
