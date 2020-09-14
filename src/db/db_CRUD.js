const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db_conection');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

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
