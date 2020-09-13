const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ed',
  password: '4911',
  host: 'localhost',
  port: 3000,
  database: 'my_app_login',
});

module.exports = pool;
