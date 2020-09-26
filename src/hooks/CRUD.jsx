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

// Update user in db
const updateUser = async (e, fName, lName, email, password, id) => {
  e.preventDefault();
  try {
    const editUser = { fName, lName, email, password };
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser),
    });
    window.location = '/';
  } catch (err) {
    console.error(err.message);
  }
};

// Delete user from db
const deleteUser = async (id, setUsers, users) => {
  try {
    const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    });

    setUsers(users.filter((user) => user.id !== id));
  } catch (err) {
    console.error(err.message);
  }
};

// Log in user
const handleLogin = async (email, password, setLogin) => {
  try {
    const editUser = { email, password };
    const response = await fetch(`http://localhost:5000/users/${email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser),
    });
    const jsonData = await response.json();
    setLogin(jsonData);
    sessionStorage.setItem('userSessionStorageData', JSON.stringify(jsonData));
    // window.location = '/';
  } catch (err) {
    console.error(err.message);
  }
};

export default {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  handleLogin,
};
