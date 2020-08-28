import React from 'react';
import styles from './App.module.scss';
import SeriesList from './SeriesList';

function App() {
  return (
    <div className={styles.app}>
      <SeriesList />
    </div>
  );
}

export default App;
