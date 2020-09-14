import React from 'react';

import colors from '../config/colors';

export default function Form({
  getUsers,
  fNameChangeHandler,
  lNameChangeHandler,
  emailChangeHandler,
  passwordChangeHandler,
}) {
  return (
    <form style={styles.container} onSubmit={getUsers}>
      <div>Please enter your account details below</div>
      <label>
        First Name{' '}
        <input
          type="text"
          placeholder="First Name"
          onChange={fNameChangeHandler}
        />
      </label>
      <label>
        Last Name{' '}
        <input
          type="text"
          placeholder="Last Name"
          onChange={lNameChangeHandler}
        />
      </label>
      <label>
        Email Name{' '}
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
      <input type="submit" value="Display Users From DB" onClick={getUsers} />
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
