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
    const { fName, lName, email, password } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (fName, lName, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [fName, lName, email, password]
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

//update a user
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fName, lName, email, password } = req.body;
    const updateUser = await pool.query(
      'UPDATE users SET fname = $1, lname = $2, email = $3, password = $4 WHERE id = $5',
      [fName, lName, email, password, id]
    );

    res.json('Todo was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

//delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [
      id,
    ]);
    res.json('Todo was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

//login a users
app.get('/users/:email', async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );
    // res.json(loginUser.rows);
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});
