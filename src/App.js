import './css/App.css';

import React from 'react';
import Header from './Components/Header';
import SignupBanner from './Components/SignupBanner';

export default function App({ props }) {
  return (
    <div className="App" style={styles.container}>
      <Header />
      <SignupBanner />
    </div>
  );
}

const styles = {
  container: {},
};
