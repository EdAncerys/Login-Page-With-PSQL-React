import React from 'react';
import colors from '../config/colors';
import Button from './Button';

export default function Header({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Login Page</div>
      <div style={styles.nav}>
        <Button text="Sign Up" />
        <Button text="Login" />
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
