import React, { useState, useEffect } from 'react';
import Form from './Form';

import colors from '../config/colors';

export default function SignupBanner({ props }) {
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ID, setID] = useState();
  const [users, setUsers] = useState([]);

  const id = new Date().getTime();

  useEffect(() => {
    console.log(users, fName, lName, email, password, ID);
  }, [users, fName, lName, email, password, ID]);

  const getUsers = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users');
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitForm = async (e) => {
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

  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE',
      });

      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <Form
          fName={fName}
          setfName={setfName}
          lName={lName}
          setlName={setlName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          getUsers={getUsers}
          onSubmitForm={onSubmitForm}
        />
      </div>

      {users.length > 0 && (
        <div style={styles.users}>
          {users.map((user, index) => {
            return (
              <div key={index} style={styles.usersRow}>
                <div>ID: {user.id}</div>
                <div>First Name: {user.fname}</div>
                <div>Last Name: {user.lname}</div>
                <div>Email: {user.email}</div>
                <div>Password: {user.password}</div>
                <div
                  style={styles.delete}
                  onClick={() => {
                    deleteUser(user.id);
                    // console.log(user.id, { users });
                  }}
                >
                  Delete
                </div>
              </div>
            );
          })}
        </div>
      )}
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
    border: `1px solid ${colors.primary}`,
  },
  usersRow: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(6, auto)',
    padding: 10,
    columnGap: 10,
  },
  delete: {
    border: `1px solid ${colors.danger}`,
    borderRadius: 10,
    backgroundColor: colors.danger,
    color: colors.white,
    padding: 5,
    cursor: 'pointer',
  },
};
