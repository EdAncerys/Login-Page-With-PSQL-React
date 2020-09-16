const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ed',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'web_app_login',
});

pool.connect((err) => {
  if (!err) console.error('DB connection successful');
  else console.error('Error connecting to client');
});

module.exports = pool;
