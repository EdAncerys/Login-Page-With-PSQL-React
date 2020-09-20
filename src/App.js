import './css/App.css';

import React from 'react';
import Header from './Components/Header';
import SignupBanner from './Components/SignupBanner';
import LoginBanner from './Components/LoginBanner';

export default function App({ props }) {
  return (
    <div className="App" style={styles.container}>
      <Header />
      <div style={styles.wrapper}>
        <SignupBanner />
        <LoginBanner />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto',
    columnGap: 30,
  },
};
