const {Pool} = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'dvd-rental',
    user: 'postgres',
    password: 'qwerty19',
})

module.exports = pool