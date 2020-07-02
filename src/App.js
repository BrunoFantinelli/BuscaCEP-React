import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index.js';
import './styles.css';
import api from './services/api';
import Main from './pages/main';

function App() {
  return (
  <div className="App"> 
    <Header />
    <Main />
  </div>
  );
}

export default App;
