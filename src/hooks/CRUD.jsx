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
};
