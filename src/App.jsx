import './styles/reset.css';
import {
  LoginPage,
  MainPage,
} from './pages';

import { Routes, Route } from 'react-router-dom';


import {
  user_manager,
} from './hooks/user_manager.js';


export default function App() {


  const {
    user,
    login,
    authStateChange,
  } = user_manager();


  return (

    <div>
      <span>이게 맞냐?</span>
      <Routes>
        <Route path="/"
          element={<LoginPage user={user} login={login} authStateChange={authStateChange} />} />
        <Route path="/main/*"
          element={<MainPage />} />
      </Routes>
    </div>

  )
}
