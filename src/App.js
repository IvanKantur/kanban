import React from 'react';
import './App.css';
import Footer from './main-parts/footer/Footer';
import Header from './main-parts/header/Header';
import MainBlock from './main-parts/main-block/Main-block';

function App() {
  return (
    <div className="App container">
      <Header/>
      <MainBlock/>
      <Footer/>
    </div>
  );
}

export default App;
