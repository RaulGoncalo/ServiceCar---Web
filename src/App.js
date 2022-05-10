import React from 'react';
import './App.css';
import {AppRoutes} from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <AppRoutes/> 
      <GlobalStyles/>
    </>
  );
}

export default App;
