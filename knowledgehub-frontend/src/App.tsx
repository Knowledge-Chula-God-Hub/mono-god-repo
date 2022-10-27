import React, { Component,useState} from 'react';
import './styles/App.css';
import HomePage from './pages/HomePage'
import { Routes ,Route, Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PostPage from './pages/PostPage';
import ScrollButton from './components/ToTopButton';
import { UserProps } from './interfaces/UserProps';
import { UserContext } from './userContext';
import { defaultUserProps } from './api/defaultVarible';
import LoginPage from './pages/LoginPage';


function App() {
  const [user,setUser1] = useState<UserProps>(defaultUserProps);
  function setUser(x:UserProps):void{
    setUser1(x)
  }
  return (
    <>
      <UserContext.Provider value = {{data : user,setData :setUser}}>
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path = "/Post/:id" element={<PostPage/>}/>
        <Route path = "/login" element = {<LoginPage/>} />
      </Routes>
      </UserContext.Provider>
      <ScrollButton/>
    </>
  );
}

export default App;
