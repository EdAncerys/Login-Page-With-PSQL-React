// Add user to db
const addUser = async (e, fName, lName, email, password) => {
  e.preventDefault();
  try {
    const body = { fName, lName, email, password };
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    window.location = '/';
  } catch (err) {
    console.error(err.message);
  }
};

// Get all users from db
const getUsers = async (setUsers) => {
  try {
    const response = await fetch('http://localhost:5000/users');
    const jsonData = await response.json();

    setUsers(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

export default {
  getUsers,
  addUser,
};
