const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'xusniddin2004',
    database: 'user_list',
    host: 'localhost',
    port: 5432
})

module.exports = pool;

