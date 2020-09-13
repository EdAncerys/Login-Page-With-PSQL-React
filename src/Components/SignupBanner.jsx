import React, { useState } from 'react';

export default function SignupBanner({ props }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);

  const id = new Date().getTime();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((users) => [...users, { id, email: email, password: password }]);
    console.log(users);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>Please enter your account details below</div>
        <label>
          Email{' '}
          <input
            type="text"
            placeholder="Account email"
            onChange={emailChangeHandler}
          />
        </label>
        <label>
          Password{' '}
          <input
            type="text"
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
        </label>
        <input type="submit" value="Enter Submit" />
      </form>
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => {
            return (
              <div key={index} style={styles.user}>
                <div>{user.id}</div>
                <div>Email: {email ? user.email : 'undefined'}</div>
                <div>Password: {password ? user.email : 'undefined'}</div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'start',
    marginTop: 50,
    height: 400,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 300,
    rowGap: 20,
  },
  user: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto auto',
    gridGap: 10,
  },
};
