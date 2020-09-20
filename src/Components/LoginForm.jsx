import React from 'react';
import colors from '../config/colors';

export default function LoginForm({ props }) {
  return (
    <form style={styles.container} onSubmit={(e) => console.log(e)}>
      <div style={styles.header}>Login Form</div>
      <label>
        Email{' '}
        <input
          type="text"
          // value={email}
          placeholder="Account email"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password{' '}
        <input
          type="text"
          // value={password}
          placeholder="Password"
          // onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
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
  header: {
    display: 'grid',
    justifyContent: 'center',
  },
};
