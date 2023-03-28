const { createPool } = require('mysql2');
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'token'
});

module.exports = pool;

// module.exports = pool;