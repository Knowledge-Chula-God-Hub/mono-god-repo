import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <PostPage></PostPage>
    </div>
  );
}

export default App;
