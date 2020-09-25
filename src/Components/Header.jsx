import React, { useContext, useEffect } from 'react';
import Button from './Button';
import { AppContext } from '../App';

import colors from '../config/colors';

export default function Header({ props }) {
  const { login, page, setPage } = useContext(AppContext);

  useEffect(() => {
    console.log(login.id);
  }, [login]);

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        {!login && (
          <div style={styles.loginUser}>
            {login.email} tetetet
            <Button text="Logout" />
          </div>
        )}
        {!login && (
          <div>
            {page === 1 && <div>Sign Up</div>}
            {page === 2 && <div>Log In</div>}
          </div>
        )}
      </div>
      <div style={styles.nav}>
        <Button
          text="Sign Up"
          onClick={() => {
            setPage(1);
          }}
        />
        <Button
          text="Login"
          onClick={() => {
            setPage(2);
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
    height: 100,
    paddingLeft: '10vw',
    backgroundColor: colors.primary,
  },
  logo: {
    color: colors.white,
    fontSize: 28,
  },
  nav: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifySelf: 'end',
    marginRight: '5vw',
  },
  loginUser: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
  },
};
