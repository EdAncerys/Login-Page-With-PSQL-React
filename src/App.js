import './css/App.css';

import React from 'react';
import Header from './Components/Header';

export default function App({ props }) {
  return (
    <div className="App" style={styles.container}>
      <Header />
    </div>
  );
}

const styles = {
  container: {},
};
