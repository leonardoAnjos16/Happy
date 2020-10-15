const orphanages = require('./database/fakedata.js');

module.exports = {
    index: (req, res) => {
        return res.render('index.hbs');
    },

    orphanage: (req, res) => {
        return res.render('orphanage.hbs')
    },

    orphanages: (req, res) => {
        return res.render('orphanages.hbs', { orphanages })
    },

    createOrphanage: (req, res) => {
        return res.render('create-orphanage.hbs');
    },
};