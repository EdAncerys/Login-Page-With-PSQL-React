import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './Components/Header';
import SignupBanner from './Components/SignupBanner';
import LoginBanner from './Components/LoginBanner';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log('welcome');
  }, [login]);

  return (
    <AppContext.Provider value={{ setLogin }}>
      <div className="App" style={styles.container}>
        <Header />
        <div style={styles.wrapper}>
          <SignupBanner />
          <LoginBanner />
        </div>
      </div>
    </AppContext.Provider>
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
