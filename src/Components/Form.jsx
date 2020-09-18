import React from 'react';

import colors from '../config/colors';

export default function Form({
  fName,
  lName,
  email,
  password,
  updateUser,
  onSubmitForm,
  setfName,
  setlName,
  setEmail,
  setPassword,
}) {
  return (
    <form style={styles.container} onSubmit={onSubmitForm}>
      <div>Please enter your account details below</div>
      <label>
        First Name{' '}
        <input
          type="text"
          value={fName}
          placeholder="First Name"
          onChange={(e) => setfName(e.target.value)}
        />
      </label>
      <label>
        Last Name{' '}
        <input
          type="text"
          value={lName}
          placeholder="Last Name"
          onChange={(e) => setlName(e.target.value)}
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
