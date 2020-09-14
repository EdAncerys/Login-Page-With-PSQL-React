import React from 'react';
import colors from '../config/colors';

export default function Header({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Login Page</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'center',
    height: 100,
    paddingLeft: '10vw',
    backgroundColor: colors.primary,
  },
  logo: {
    color: colors.white,
    fontSize: 28,
  },
};
