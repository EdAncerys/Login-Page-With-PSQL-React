import React, { useState, useEffect } from 'react';

import colors from '../config/colors';
import Form from './Form';

export default function SignupBanner({ props }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);

  const id = new Date().getTime();

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((users) => [...users, { id, email: email, password: password }]);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };

  const getUsers = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users');
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <Form
        getUsers={getUsers}
        emailChangeHandler={emailChangeHandler}
        passwordChangeHandler={passwordChangeHandler}
      />

      <div style={styles.user}>
        {users.length > 0 && (
          <ul>
            {users.map((user, index) => {
              return (
                <div key={index} style={styles.userRow}>
                  <div>ID: {user.id}</div>
                  <div>First Name: {user.first_name}</div>
                  <div>Last Name: {user.last_name}</div>
                  <div>Email: {user.email}</div>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    marginTop: 50,
  },
  user: {
    display: 'grid',
    justifyContent: 'center',
    gridGap: 10,
  },
  userRow: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 10,
    padding: 20,
    borderRadius: 10,
    marginRight: 30,
    border: `1px solid ${colors.secondary}`,
  },
};
