const path = require('path');
const sqlite = require('sqlite-async');

const getDatabase = async () => {
    const db = await sqlite.open(path.join(__dirname, 'database.sqlite'));
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            about TEXT NOT NULL,
            images TEXT NOT NULL,
            lat TEXT NOT NULL,
            lng TEXT NOT NULL,
            instructions TEXT NOT NULL,
            hours TEXT NOT NULL,
            weekends TEXT NOT NULL,
            whatsapp TEXT NOT NULL
        );
    `);
};

const createOrphanage = async ({ name, about, images, lat, lng, instructions, hours, weekends, whatsapp }) => {
    const db = await getDatabase();
    await db.run(`
        INSERT INTO orphanages (
            name,
            about,
            images,
            lat,
            lng,
            instructions,
            hours,
            weekends,
            whatsapp
        ) VALUES (
            "${name}",
            "${about}",
            "${images}",
            "${lat}",
            "${lng}",
            "${instructions}",
            "${hours}",
            "${weekends}",
            "${whatsapp}"
        );
    `);
};

module.exports = { getDatabase, createOrphanage };