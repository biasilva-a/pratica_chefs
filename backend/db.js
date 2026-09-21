const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pratica_chefs',
    password: 'senai',
    port: 5432
});

module.exports = pool;