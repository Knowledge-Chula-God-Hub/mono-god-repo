import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import HomePage from './pages/HomePage'
import { Routes ,Route, Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PostPage from './pages/PostPage';

function App() {
  return (
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path = "/" element={<LandingPage/>}/>
        <Route path = "/Post" element={<PostPage/>}/>
      </Routes>
  );
}

export default App;
