import React, { useState, useEffect } from 'react';

import colors from '../config/colors';
import Form from './Form';

export default function SignupBanner({ props }) {
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: 'frodo',
      last_name: 'baggins',
      email: 'frodo@email.com',
      created_at: null,
    },
  ]);

  const id = new Date().getTime();

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((users) => [...users, { id, email: email, password: password }]);
  };

  const fNameChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const lNameChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
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
      <div style={styles.form}>
        <Form
          getUsers={getUsers}
          fNameChangeHandler={fNameChangeHandler}
          lNameChangeHandler={lNameChangeHandler}
          emailChangeHandler={emailChangeHandler}
          passwordChangeHandler={passwordChangeHandler}
        />
      </div>

      <div style={styles.users}>
        {users.map((user, index) => {
          return (
            <div key={index} style={styles.usersRow}>
              <div>ID: {user.id}</div>
              <div>First Name: {user.first_name}</div>
              <div>Last Name: {user.last_name}</div>
              <div>Email: {user.email}</div>
            </div>
          );
        })}
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
  form: {
    display: 'grid',
    justifyContent: 'center',
  },
  users: {
    display: 'grid',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    border: `1px solid ${colors.secondary}`,
  },
  usersRow: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto auto auto',
    padding: 10,
    columnGap: 10,
  },
};
