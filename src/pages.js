const database = require('./database/db.js');

module.exports = {
    index: (req, res) => {
        return res.render('index');
    },

    orphanage: async (req, res) => {
        try {
            const { id } = req.query;
            const db = await database.getDatabase();

            const results = await db.all(`SELECT * from orphanages WHERE id = ${id}`);
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(',');
            orphanage.mainImage = orphanage.images[0];
            orphanage.weekends = orphanage.weekends === '1' ? true : false;

            return res.render('orphanage', { orphanage });
        } catch (err) {
            console.log(err);
            return res.send('Erro inesperado ao tentar acessar o banco de dados!');
        }

    },

    orphanages: async (req, res) => {
        try {
            const db = await database.getDatabase();
            const orphanages = await db.all('SELECT * FROM orphanages;');
            return res.render('orphanages', { orphanages });
        } catch (err) {
            console.log(err);
            return res.send('Erro inesperado ao tentar acessar o banco de dados!');
        }
    },

    createOrphanage: (req, res) => {
        return res.render('create-orphanage');
    },

    saveOrphanage: async (req, res) => {
        const orphanage = req.body;
        if (Object.values(orphanage).includes(''))
            return res.send('Todos os campos do formulário devem ser preenchidos!');

        try {
            orphanage.images = orphanage.images.toString();
            await database.createOrphanage(orphanage);
            return res.redirect('/orphanages');
        } catch (err) {
            console.log(err);
            return res.send('Erro inesperado ao tentar acessar o banco de dados!');
        }
    },
};