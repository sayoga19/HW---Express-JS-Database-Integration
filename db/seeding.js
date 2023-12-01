const pool = require('../config.js')
const fs = require('fs')

const seedQuery = fs.readFileSync("db/seeding.sql", "utf8");
pool.query(seedQuery, (err, res) => {
    if(err) throw err;
    console.log('seeding completed');
    pool.end();
})