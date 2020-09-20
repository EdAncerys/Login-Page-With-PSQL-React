import React from 'react';
import LoginForm from './LoginForm';

export default function LoginBanner({ props }) {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    marginTop: 50,
  },
};
