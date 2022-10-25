import React, { Component } from 'react';
import './styles/App.css';
import HomePage from './pages/HomePage'
import { Routes ,Route, Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PostPage from './pages/PostPage';
import ScrollButton from './components/ToTopButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path = "/" element={<LandingPage/>}/>
        <Route path = "/Post/:id" element={<PostPage/>}/>
      </Routes>
      <ScrollButton/>
    </>
  );
}

export default App;
