import './styles/reset.css';
import {
  LoginPage,
  MainPage,
} from './pages';

import {
  Navigation,
} from './components/organizations';

import { Routes, Route } from 'react-router-dom';
//import { useEffect } from 'react';

import {
  user_manager,
} from './hooks/user_manager.js';


export default function App() {


  const {
    user,
    login,
    checkAuth,
  } = user_manager();



  //상태 확인
  checkAuth();


  const divStyle = {
    width: '100%',
    height: '100%',
  };


  return (

    <div style={divStyle}>

      {user ? <Navigation /> : ''}

      <Routes>
        <Route path="/"
          element={<LoginPage user={user} login={login} checkAuth={checkAuth} />} />
        <Route path="/main/*"
          element={<MainPage user={user} checkAuth={checkAuth} />} />
      </Routes>
    </div>

  )
}
