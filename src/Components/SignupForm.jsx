import React, { useContext } from 'react';
import { AppContext } from '../App';

import colors from '../config/colors';

export default function SignupForm({ addUser, updateUser }) {
  const {
    fName,
    setFName,
    lName,
    setLName,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  return (
    <form style={styles.container} onSubmit={(e) => addUser(e)}>
      <div>Please enter your account details below</div>
      <label>
        First Name{' '}
        <input
          type="text"
          value={fName}
          placeholder="First Name"
          onChange={(e) => setFName(e.target.value)}
        />
      </label>
      <label>
        Last Name{' '}
        <input
          type="text"
          value={lName}
          placeholder="Last Name"
          onChange={(e) => setLName(e.target.value)}
        />
      </label>
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
      <input type="submit" value="Submit" />
      <input type="submit" value="Update User Details" onClick={updateUser} />
    </form>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: 300,
    rowGap: 20,
    padding: 20,
    borderRadius: 10,
    border: `1px solid ${colors.primary}`,
  },
};
