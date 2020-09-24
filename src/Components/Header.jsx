import React, { useContext, useEffect } from 'react';
import Button from './Button';
import { AppContext } from '../App';

import colors from '../config/colors';

export default function Header({ props }) {
  const { login, pageOne, setPageOne, pageTwo, setPageTwo } = useContext(
    AppContext
  );

  useEffect(() => {
    console.log(login.id);
  }, [login]);

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        {login && <div>{login.email}</div>}
        {!login && (
          <div>
            {pageOne && <div>Sign Up</div>}
            {pageTwo && <div>Log In</div>}
          </div>
        )}
      </div>
      <div style={styles.nav}>
        <Button
          text="Sign Up"
          onClick={() => {
            setPageOne(true);
            setPageTwo(false);
          }}
        />
        <Button
          text="Login"
          onClick={() => {
            setPageOne(false);
            setPageTwo(true);
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
};
