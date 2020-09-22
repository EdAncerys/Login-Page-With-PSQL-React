import React, { useState, useEffect } from 'react';
import db from '../hooks/CRUD';

import colors from '../config/colors';

export default function LoginForm({ props }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    db.handleLogin(email, password);
    // console.log(email, password);
  };

  // useEffect(() => {
  //   console.log(email, password);
  // }, [email, password]);

  return (
    // <form style={styles.container} onSubmit={(e) => handleLogin(e)}>
    //   <div style={styles.header}>Login Form</div>
    //   <label>
    //     Email{' '}
    //     <input
    //       type="text"
    //       value={email}
    //       placeholder="Account email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </label>
    //   <label>
    //     Password{' '}
    //     <input
    //       type="text"
    //       value={password}
    //       placeholder="Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
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
