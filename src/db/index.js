const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a users

app.post('/users', async (req, res) => {
  try {
    const { fName } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (fName) VALUES($1) RETURNING *',
      [fName]
    );

    res.json(newUser.rows[0]);
    // console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//get all users

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
