const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db_conection');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//get all users

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});

//create a user

// app.post('/users', async (req, res) => {
//   try {
//     const { fName, lName, email, password } = req.body;
//     const newUser = await pool.query(
//       'INSERT INTO users (fName, lName, email, password) VALUES($1, $2, $3, $4) RETURNING *',
//       [fName, lName, email, password]
//     );

//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.post('/users', async (req, res) => {
  try {
    const { fName } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (fName) VALUES($1) RETURNING *',
      [fName]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
