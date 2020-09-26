import React, { useState, useContext } from 'react';
import db from '../hooks/CRUD';
import { AppContext } from '../App';
import Button from './Button';

import colors from '../config/colors';

export default function LoginForm({ props }) {
  const { setLogin } = useContext(AppContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getUserData = () => {
    let data = sessionStorage.getItem('userSessionStorageData');
    console.log(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    db.handleLogin(email, password, setLogin);
  };

  return (
    <form style={styles.container} onSubmit={(e) => handleLogin(e)}>
      <label>
        Email{' '}
        <input
          type="text"
          value={email}
          placeholder="Account email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password{' '}
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input style={styles.btn} type="submit" value="Login" />
      <Button text="Log User Data" onClick={() => getUserData()} />
    </form>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: 300,
    height: 200,
    rowGap: 20,
    padding: 20,
    borderRadius: 10,
    border: `1px solid ${colors.danger}`,
  },
  btn: {
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 10,
    cursor: 'pointer',
  },
};
